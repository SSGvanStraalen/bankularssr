import {Component, OnInit} from '@angular/core';
import {AuthService, User} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  size: number;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.getUser();
    this.size = 150;
  }

  getUser(): void {
    this.authService.getUser()
      .subscribe(user => {
        this.user = user
      });
  }

}
