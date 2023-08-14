import { Component } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userList: Array<UserModel> = [
    {
      id: "60d0fe4f5311236168a109fa",
      title: "ms",
      firstName: "Ann",
      lastName: "Mason",
      picture: "https://randomuser.me/api/portraits/med/women/18.jpg"
    },
    {
      id: "60d0fe4f5311236168a109fb",
      title: "mr",
      firstName: "Sohan",
      lastName: "Pierre",
      picture: "https://randomuser.me/api/portraits/med/men/77.jpg"
    },
    {
      id: "60d0fe4f5311236168a109fc",
      title: "mr",
      firstName: "Gonzaga",
      lastName: "Ribeiro",
      picture: "https://randomuser.me/api/portraits/med/men/10.jpg"
    },
    {
      id: "60d0fe4f5311236168a109ff",
      title: "mrs",
      firstName: "Josefina",
      lastName: "Calvo",
      picture: "https://randomuser.me/api/portraits/med/women/3.jpg"
    },
    {
      id: "60d0fe4f5311236168a10a00",
      title: "mrs",
      firstName: "Els",
      lastName: "Ijsseldijk",
      picture: "https://randomuser.me/api/portraits/med/women/75.jpg"
    },
  ]
}
