import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../models/user.model';

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
    })

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {
        this.userForm.patchValue({
            firstName: this.user?.firstName,
            lastName: this.user?.lastName,
            gender: this.user?.gender,
        })
    }

    onSubmit() { }
}