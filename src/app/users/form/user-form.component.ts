import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import UserService from '../user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
    @Input()
    user?: UserModel;
    isUpdated: boolean = false;
    userForm = new FormGroup({
        firstName: new FormControl('',[ Validators.minLength(3), Validators.required]),
        lastName: new FormControl('',[ Validators.minLength(3), Validators.required]),
        gender: new FormControl(''),
        picture: new FormControl(''),
        email: new FormControl('', Validators.email),
        title: new FormControl(''),
        dateOfBirth: new FormControl(''),
        phone: new FormControl('', [Validators.minLength(6), Validators.required]),
        city: new FormControl('',[ Validators.minLength(3), Validators.required]),
        country: new FormControl('',[ Validators.minLength(3), Validators.required]),
        state: new FormControl('', [Validators.minLength(2), Validators.required]),
        street: new FormControl('',[ Validators.minLength(3), Validators.required]),
        timezone: new FormControl(''),
    })

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.userForm.valueChanges.subscribe(form => {
            this.isUpdated = false;
            if (this.user && this.userForm.valid && !this.userForm.pristine) {
                this.onSubmit()
            } else {
                this.userForm.hasError
            }
        })
    }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.user) {
            this.userForm.controls['email'].disable()
        }

        this.userForm.patchValue({
            firstName: this.user?.firstName,
            lastName: this.user?.lastName,
            gender: this.user?.gender,
            email: this.user?.email,
            title: this.user?.title,
            picture: this.user?.picture,
            dateOfBirth: this.user?.dateOfBirth,
            phone: this.user?.phone,
            city: this.user?.location.city,
            country: this.user?.location.country,
            state: this.user?.location.state,
            street: this.user?.location.street,
            timezone: this.user?.location.timezone,
        })
    }

    returnToList() {
        this.router.navigate(['/user-list'])
    }

    onSubmit() {

        const location = {
            city: this.userForm.value.city,
            country: this.userForm.value.country,
            state: this.userForm.value.state,
            street: this.userForm.value.street,
            timezone: this.userForm.value.timezone,
        }

        const user = {
            id: this.user?.id,
            title: this.userForm.value.title,
            firstName: this.userForm.value.firstName,
            lastName: this.userForm.value.lastName,
            picture: this.userForm.value.picture,
            gender: this.userForm.value.gender,
            email: this.userForm.value.email,
            dateOfBirth: this.userForm.value.dateOfBirth,
            phone: this.userForm.value.phone,
            location: location
        };

        if (this.user) {
            this.userService.updateUserData(user)
                .subscribe(result => {
                    this.user = result;
                    this.isUpdated = true;
                }, err => {
                    alert('erro ao atualizar o usuário');
                    console.log(err);
                });
        } else {
            this.userService.createUser(user)
                .subscribe(result => {
                    this.user = result;
                    alert('Usuário Adicionado com sucesso');
                }, err => {
                    alert('Erro.');
                    console.log(err.error.data);
                });
        }
    }
}