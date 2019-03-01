import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {first} from "rxjs/operators";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public message: string;

  constructor(private authService: AuthService, private router: Router) { }

  checkPass() {
    if (this.username === this.password) {
      console.log('You shall pass');
      this.authService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigateByUrl('/overview');    
            console.log('data',data);
          },
          error => {
            console.log('error',error);
          });
    } else {
      this.message = 'Nope you shall not pass'
      console.log('you shall not pass')
    }
  }

  ngOnInit() {
  }

}
