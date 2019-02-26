import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
// import decode from 'jwt-decode';

@Injectable()
export default class AuthService {

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
    console.log('lgoin user', username);
    return this.http.post<any>(`/user/login`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setSession(user.token)
        }

        return user;
      }));
  }

  private setSession(token) {
    localStorage.setItem('id_token', token);
  }

  static getToken() {
    return localStorage.getItem('id_token');
  }

  static logout() {
    localStorage.removeItem("id_token");
  }

  public isLoggedIn() {
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

}
