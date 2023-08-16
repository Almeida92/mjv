import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from './models/user.model';

@Injectable({
    providedIn: 'root',
})
export default class UserService {
    url: string = 'https://dummyapi.io/data/v1/';

    constructor(private http: HttpClient) { }

    getUserList(): Observable<any> {
        return this.http.get(this.url + `user?created=1`);
    }

    getUserData(id: string): Observable<any> {
        return this.http.get(this.url + `user/${id}`);
    }

    updateUserData(user: any): Observable<any> {
        return this.http.put(this.url + `user/${user.id}`, user);
    }

    createUser(user: any): Observable<any> {
        return this.http.post(this.url + `user/create`, user);
    }

    deleteUser(id: string): Observable<any> {
        return this.http.delete(this.url + `user/${id}`);
    }
}
