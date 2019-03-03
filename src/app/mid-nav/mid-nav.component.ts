import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mid-nav',
  templateUrl: './mid-nav.component.html',
  styleUrls: ['./mid-nav.component.scss']
})
export class MidNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
