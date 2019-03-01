import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;

  constructor(private http: HttpClient) {
  }

  static logout() {
    // remove cookie
  }

  login(username: string, password: string) {
    return this.http.post<any>(`/api/user/login`, {username, password})
      .pipe(map(resp => {
        // login successful if there's a jwt token in the response
        if (resp && resp.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.user = resp.user;
          this.token = resp.token;
        }

        return resp.user;
      }));
  }

  public isLoggedIn() {
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

}

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  prefix: string;
}
