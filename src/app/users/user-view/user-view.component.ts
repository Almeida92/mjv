import { Component, OnInit } from '@angular/core';
import UserService from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  user: UserModel | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.userService.getUserData(param['id'])
          .subscribe(user => {
            user.gender = user.gender == `male` ? `masculino` : `feminino`;
            this.user = user;
          })
      }
    })
  }

  returnToList() {
    this.router.navigate(['/user-list'])
  }

  editUserdata(id: string): void {
    this.router.navigate([`/user-data/${id}`]);
  }
}