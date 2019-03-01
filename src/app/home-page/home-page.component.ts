import { Component, OnInit } from '@angular/core';
import {Content, HomeContentService} from '../services/homeContent.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [HomeContentService]
})
export class HomePageComponent implements OnInit {

  homeContent: Content;

  constructor(private homeContentSerivce: HomeContentService) {
    this.homeContent = homeContentSerivce.homeContent;
    this.gethomeContent();
  }

  ngOnInit() {
    
  }

  gethomeContent(): void {
    this.homeContentSerivce.getHomeContent()
      .subscribe(hc => {console.log('dddddd');console.log(this.homeContent); this.homeContent = hc});
  }

}
