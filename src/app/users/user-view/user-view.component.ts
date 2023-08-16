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
  constructor() { }

  ngOnInit(): void { }
}