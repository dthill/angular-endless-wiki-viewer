import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetArticleService {

  constructor(private http: HttpClient) { }

  getArticle(title: string): Observable<string> {
    let url = 'https://en.wikipedia.org/api/rest_v1/page/mobile-html/';
    url += encodeURIComponent(title);
    return this.http.get(url, {responseType: 'text'});
  }
}
