import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export default class AccountsService {

  constructor(private http: HttpClient) {

  }

  getAccounts() {
    return this.http.get<any>('/accounts')
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }

}
