import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreditPageComponent } from './credit-page/credit-page.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'credit', component: CreditPageComponent },
  { path: 'overview', component: AccountOverviewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
