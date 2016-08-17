import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './index'
import { Config } from '../index';
import 'rxjs/Rx';

@Injectable() 
export class UserService {
    constructor(private _http: Http ){}

    signin(user: User){
        let header = new Headers({ 'Content-Type': 'application/json' });

        return this._http.post(
            Config.apiUrl + 'user/signin', 
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            {headers : header}
        )
        .map(response => response.json())
        .do(data => Config.token = data.obj)
        .catch(error => Observable.throw(error.json()))
    }

    signup(user: User){
        return console.log(user.email);
    }
}