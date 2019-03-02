import { Component, OnInit } from '@angular/core';
import {Content, HomeContentService} from '../services/homeContent.service';
import { Meta } from '@angular/platform-browser';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [HomeContentService]
})
export class HomePageComponent implements OnInit {

  homeContent: Content;

  constructor(
    private homeContentSerivce: HomeContentService,
    private meta: Meta,
    private titleService: Title) {
      this.titleService.setTitle('Bankular Home');
      this.meta.addTags([
        { name: 'description', content: 'There is only one bank where kitty money is real and thats this one' },
        { name: 'author', content: 'bankular' },
        { name: 'keywords', content: 'Angular, bank, kitty' },
        { name: 'og:title', content: 'Bankular home'},
        { name: 'og:description', content: 'This is the home page of bankular where kitty money is a real thing!'},
        { name: 'og:url', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/'},
        { name: 'og:image', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/assets/KittyCard-Top.png'},


        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@SvenvanStraalen' },
        { name: 'twitter:creator', content: '@twitter-username'},
        { name: 'twitter:title', content: 'Bankular Home'},
        { name: 'twitter:description', content: 'There is only one bank where kitty money is real and thats this one'},
        { name: 'twitter:image', content: 'http://bankularx-env.wzmxwbagad.eu-west-1.elasticbeanstalk.com/assets/KittyCard-Top.png'},

      ])

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
