import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        gender: new FormControl(''),
        picture: new FormControl(''),
        email: new FormControl(''),
        title: new FormControl(''),
        dateOfBirth: new FormControl(''),
        phone: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        street: new FormControl(''),
        timezone: new FormControl(''),
    })

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit(): void { }

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
            email:this.userForm.value.email,
            dateOfBirth: this.userForm.value.dateOfBirth,
            phone: this.userForm.value.phone,
            location: location
        };

        if (this.user) {
            this.userService.updateUserData(user)
                .subscribe(result => {
                    this.user = result;
                    alert('Usuário atualizao com sucesso');
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
                    alert('erro ao tentar adicionar o usuário');
                    console.log(err);
                });
        }
    }
}