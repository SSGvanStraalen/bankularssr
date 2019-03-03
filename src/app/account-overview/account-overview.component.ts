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

  getAmount(amount: number, decimals: number = 2) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: decimals }).format(amount);
  }

  getAmountDecimals(amount: number) {
    const formattedAmount = this.getAmount(amount);
    return formattedAmount.substr(formattedAmount.length - 3);
  }
}
