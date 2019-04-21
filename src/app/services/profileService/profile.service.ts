import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders(),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})


export class ProfileService {



  constructor(private httpClient: HttpClient) {

  }

  public findCurrentUser() {
     return this.httpClient.get(environment.local5000 + '/api/currentUser', httpOptions);
  }

  public login(user) {
    console.log(user);
    return this.httpClient.post(environment.local5000 + '/api/login', user, httpOptions);
  }

}
