import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

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
        email: new FormControl({ value: '', disabled: true }),
        title: new FormControl(''),
        dateOfBirth: new FormControl(''),
        phone: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        street: new FormControl(''),
        timezone: new FormControl(''),
    })

    constructor(private router:Router) {}

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {
        this.userForm.patchValue({
            firstName: this.user?.firstName,
            lastName: this.user?.lastName,
            gender: this.user?.gender,
            email: this.user?.email,
            title: this.user?.title,
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

    onSubmit() { }
}