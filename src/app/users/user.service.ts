import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserResponseModel } from './models/user-response.model';

@Injectable({
    providedIn: 'root',
})
export default class UserService {
    url: string = 'https://dummyapi.io/data/v1/user';
    constructor(private http: HttpClient) { }

    getUserList(): Observable<any> {
        return this.http.get(this.url);
    }
}
