import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import {  MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    UserListComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class UsersModule { }
