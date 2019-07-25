import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GetArticleService } from "../../services/get-article.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-article-viewer",
  templateUrl: "./article-viewer.component.html",
  styleUrls: ["./article-viewer.component.css"]
})
export class ArticleViewerComponent implements OnInit {
  title: string;
  articleHTML: any;
  loadingArticleHTML =
    "<h1 style='font-family: Verdana, sans-serif; text-align: center;'>Article Loading...</h1>";

  constructor(
    private route: ActivatedRoute,
    private getArticleService: GetArticleService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(
      this.loadingArticleHTML
    );
    this.title = this.route.snapshot.paramMap.get("title");
    this.getArticleService.getArticle(this.title).subscribe(articleData => {
      this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(articleData);
    });
  }
}
