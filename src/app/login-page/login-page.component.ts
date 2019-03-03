import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
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

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/overview');
        },
        error => {
          this.error = "Log in failed.";
          this.loading = false;
        });
  }

}
