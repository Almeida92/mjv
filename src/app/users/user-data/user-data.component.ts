import { Component, OnInit } from '@angular/core';
import UserService from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  user: UserModel | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.userService.getUserData(param['id'])
          .subscribe(user => {
            this.user = user
          })
      }
    })
  }
}
