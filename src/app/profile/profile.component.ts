import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  img: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.img = '../../assets/kitty.jpg';
    this.name = 'Mr. Meow';
  }

}
