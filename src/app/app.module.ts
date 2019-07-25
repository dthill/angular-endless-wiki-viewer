import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { ArticleViewerComponent } from './components/article-viewer/article-viewer.component';
import { ArticleListerComponent } from './components/article-lister/article-lister.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ViewerHeaderComponent } from './components/viewer-header/viewer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArticleViewerComponent,
    ArticleListerComponent,
    ArticlePreviewComponent,
    ViewerHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
