import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListerComponent } from "./components/article-lister/article-lister.component";
import { ArticleViewerComponent } from "./components/article-viewer/article-viewer.component";

const routes: Routes = [
  { path: "", component: ArticleListerComponent },
  { path: "article/:title", component: ArticleViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
