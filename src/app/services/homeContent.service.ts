import {Injectable, Inject, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import { APP_BASE_HREF } from '@angular/common'; 


@Injectable({
  providedIn: 'root'
})
export class HomeContentService {
  homeContent;
  private homeContentUrl = '/homeContent';

  constructor(private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string) {
      origin = origin === null ?'':origin;
      this.homeContentUrl = `${origin}${this.homeContentUrl}`;

  }

  getHomeContent(): Observable<Content> {
    return this.http.get<Content>(this.homeContentUrl);
  }

}

export interface Content {
  firstText: string,
  firstHeading: string,
  long: String,
  imgUrl: String
}


