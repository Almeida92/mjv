import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import UserService from '../user.service';
import { UserResponseModel } from '../models/user-response.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: Array<UserModel> | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .getUserList()
      .subscribe((result: UserResponseModel) => {
        this.userList = result.data
      })
  }
}
