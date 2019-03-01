import {Component, OnInit} from '@angular/core';
import {Account, AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
  providers: [AccountsService]
})
export class AccountOverviewComponent implements OnInit {

  accounts: Account[];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountsService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

}
