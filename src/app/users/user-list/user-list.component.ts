import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import UserService from '../user.service';
import { UserResponseModel } from '../models/user-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: Array<UserModel> | undefined;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.updateUserList();
  }

  viewUserdata(id: string): void {
    this.router.navigate([`/user-view/${id}`]);
  }

  editUserdata(id: string): void {
    this.router.navigate([`/user-data/${id}`]);
  }

  deleteUser(id: string): void {
    this.userService
      .deleteUser(id)
      .subscribe(result => {
        alert('Usuário apagado com sucesso.');
        this.updateUserList();
      }, err => {
        alert('Erro ao apagar usuário.');
      })
  }

  updateUserList(): void {
    this.userService
      .getUserList()
      .subscribe((result: UserResponseModel) => {
        this.userList = result.data
      })
  }
}
