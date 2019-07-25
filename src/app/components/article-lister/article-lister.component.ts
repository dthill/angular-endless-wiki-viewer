import { Component, OnInit } from '@angular/core';
import { GetRandomArticlesService } from 'src/app/services/get-random-articles.service';

@Component({
  selector: 'app-article-lister',
  templateUrl: './article-lister.component.html',
  styleUrls: ['./article-lister.component.css']
})
export class ArticleListerComponent implements OnInit {
  articles = [];
  main: any;
  constructor(private getRandomArticlesService: GetRandomArticlesService) {}

  onScroll() {
    if (((this.main.scrollHeight - this.main.scrollTop) * 0.8 <= this.main.clientHeight)) {
      setTimeout(() => {this.getArticles();} , 0 );
    }
  }

  getArticles() {
    this.getRandomArticlesService.getArticles().subscribe(articles => {
      this.articles = this.articles.concat(articles);
    });
  }

  ngOnInit() {
    this.main = document.getElementById("main")
    this.main.scrollTo(0,0);
    this.getArticles();
  }
}
