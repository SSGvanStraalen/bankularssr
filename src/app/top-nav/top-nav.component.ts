import {Component, OnInit} from '@angular/core';
import {AuthService, User} from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  user: User;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus(): void {
    this.authService.getUser()
      .subscribe(user => {
        this.user = user
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
