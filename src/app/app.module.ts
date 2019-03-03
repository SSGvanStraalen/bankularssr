import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth.interceptor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CreditPageComponent} from './credit-page/credit-page.component';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountOverviewComponent} from './account-overview/account-overview.component';
import {LoginPageComponent} from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomePageComponent,
    CreditPageComponent,
    LoginComponent,
    AccountOverviewComponent,
    LoginPageComponent,
    ProfileComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
