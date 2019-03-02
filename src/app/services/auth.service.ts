import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";
import {Account} from "./accounts.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;

  constructor(private http: HttpClient) {

  }

  getUser(): Observable<User>  {
    return this.http.get<User>('/api/user');
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/user/login`, {username, password})
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

  logout() {
    document.cookie = "jwt=";
  }
}

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  prefix: string;
}
