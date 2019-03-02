import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {first} from "rxjs/operators";
import {Router} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public message: string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private meta: Meta,
    private titleService: Title
    ) { 

    this.titleService.setTitle('Bankular login');
    this.meta.addTags([
      { name: 'description', content: 'There is only one bank where kitty money is real and thats this one and here you can login' },
      { name: 'author', content: 'mr Bankular' },
      { name: 'keywords', content: 'Angular, bank, kitty, login' },
      { name: 'og:title', content: 'Bankular login'},
      { name: 'og:description', content: 'Login page bankular where kitty money exists'},
      { name: 'og:url', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/'},
      { name: 'og:image', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/assets/KittyCard-Top.png'},


      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@SvenvanStraalen' },
      { name: 'twitter:creator', content: '@twitter-username'},
      { name: 'twitter:title', content: 'Bankular login'},
      { name: 'twitter:description', content: 'Bankular login page'},
      { name: 'twitter:image', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/assets/KittyCard-Top.png'},

    ])

  }

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
