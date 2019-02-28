import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  static getToken() {
    return localStorage.getItem('id_token');
  }

  static logout() {
    localStorage.removeItem("id_token");
  }

  login(username: string, password: string) {
    return this.http.post<any>(`/user/login`, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setSession(user.token)
        }

        return user;
      }));
  }

  public isLoggedIn() {
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  private setSession(token) {
    localStorage.setItem('id_token', token);
  }

}
