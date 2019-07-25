import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetRandomArticlesService {
  queryJSON = {
    action: 'query',
    format: 'json',
    prop: 'extracts|pageimages',
    generator: 'random',
    exchars: '500',
    exlimit: '12',
    exintro: 1,
    explaintext: 1,
    pithumbsize: '200',
    pilimit: '12',
    grnnamespace: '0',
    grnlimit: '12',
    origin: '*'
  };

  createAPIurl(obj) {
    let result = 'https://en.wikipedia.org/w/api.php?';
    Object.keys(obj).forEach(queryKey => {
      result += '&' + queryKey + '=' + obj[queryKey];
    });
    return result;
  }

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    const articles = this.http.get(this.createAPIurl(this.queryJSON)).pipe(
      map(data => {
        const articlesData: any = data;
        const result = [];
        Object.keys(articlesData.query.pages).forEach(articleDataId => {
          result.push({
            pageid: articleDataId,
            title: articlesData.query.pages[articleDataId].title,
            image: articlesData.query.pages[articleDataId].thumbnail ?
            articlesData.query.pages[articleDataId].thumbnail.source : null,
            extract: articlesData.query.pages[articleDataId].extract,
            url: 'https://en.wikipedia.org/api/rest_v1/page/mobile-html/' +
            articlesData.query.pages[articleDataId].title,
            outsideUrl: 'https://en.wikipedia.org/wiki/' +
            articlesData.query.pages[articleDataId].title,
          });
        });
        return result;
      })
    );
    return articles;
  }
}
