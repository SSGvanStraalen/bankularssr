import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreditPageComponent } from './credit-page/credit-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'credit', component: CreditPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
