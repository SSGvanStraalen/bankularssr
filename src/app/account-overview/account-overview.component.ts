import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, AccountsService} from '../services/accounts.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
  providers: [AccountsService]
})
export class AccountOverviewComponent implements OnInit {
  private showTransferAccount: string;
  transferForm: FormGroup;
  accounts: Account[];
  loading = false;
  submitted = false;
  error = '';
  benefs: Account[];
  data: string;

  constructor(
    private accountsService: AccountsService,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit() {
    this.getAccounts();
    this.getBeneficiaries();
    this.transferForm = this.formBuilder.group({
      amount: ['', Validators.required],
      accountNr: ['', Validators.required]
    });
  }

  get f() {
    return this.transferForm.controls;
  }

  getAccounts(): void {
    this.accountsService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  getBeneficiaries(): void {
    this.accountsService.getBeneficiaries()
      .subscribe(benefs => this.benefs = benefs);
  }

  getAmount(amount: number, decimals: number = 2) {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals }).format(amount);
    // return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: decimals }).format(amount);
  }

  getAmountInteger(amount: number) {
    const formattedAmount = this.getAmount(amount);
    return formattedAmount.substring(0, formattedAmount.length - 3);
  }

  getAmountDecimals(amount: number) {
    const formattedAmount = this.getAmount(amount);
    return formattedAmount.substr(formattedAmount.length - 3);
  }

  toggleTransfer(account: Account) {
    this.showTransferAccount = this.showTransferAccount === account.accnr ? '' : account.accnr;
  }

  showTransfer(account: Account) {
    return account.accnr === this.showTransferAccount;
  }

  onSubmit(account: Account) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.transferForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountsService.saveTransfer(account.accnr, this.f.accountNr.value, this.f.amount.value)
      .pipe(first())
      .subscribe(
        result => {
          this.loading = false;
          this.submitted = false;
          this.data = (result as any).data;
          this.error = '';
          this.transferForm.reset();
          this.getAccounts();
        },
        error => {
          this.error = 'Transfer failed.';
          this.loading = false;
        });
  }
}
