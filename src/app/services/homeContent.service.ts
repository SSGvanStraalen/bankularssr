import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeContentService {
  homeContent;
  private homeContentUrl = '/api/homeContent';

  constructor(private http: HttpClient) {
      this.homeContentUrl = `${environment.apiUrl}${this.homeContentUrl}`;

  }

  getHomeContent(): Observable<Content> {
    return this.http.get<Content>(this.homeContentUrl);
  }

}

export interface Content {
  firstText: string,
  firstHeading: string,
  slogenLineOne: String,
  slogenLineTwo: String,
  slogenLineThree: String,
  imgUrl: String
}


