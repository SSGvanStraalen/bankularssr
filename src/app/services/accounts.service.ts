import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.apiUrl}/api/accounts`);
  }

  getBeneficiaries(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.apiUrl}/api/accounts/beneficiaries`);
  }

  saveTransfer(from: string, to: string, amount: number): Observable<string> {
    return this.http.post<any>(`${environment.apiUrl}/api/accounts/transfer`, {from, to, amount});
  }
}

export interface Account {
  acc: string;
  accnr: string;
  balance: number;
}
