(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article-lister/article-lister.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article-lister/article-lister.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" (scroll)=\"onScroll($event)\">\n  <app-article-preview *ngFor=\"let article of articles\" [article]=\"article\">\n  </app-article-preview>\n  <h1>Loading...</h1>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article-preview/article-preview.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article-preview/article-preview.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"/article/{{article.title}}\">\n    <ng-template [ngIf]=\"article.image\">\n      <img src=\"{{ article.image }}\" alt=\"article thumbnail\" />\n    </ng-template>\n    <h1>{{ article.title }}</h1>\n    <p>{{ article.extract }}</p>\n  </a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article-viewer/article-viewer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article-viewer/article-viewer.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-viewer-header [title]=\"title\"></app-viewer-header>\n<main>\n  <iframe [srcdoc]=\"articleHTML\"></iframe>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/navigation/navigation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/navigation/navigation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"logo\">Wiki Viewer</div>\n  <a href=\"/\">\n    <div class=\"button\">New Articles</div>\n  </a>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/viewer-header/viewer-header.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/viewer-header/viewer-header.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a class=\"left\" [href]=\"url\" target=\"_blank\" rel=\"noopener noreferrer\">\n    Open on Wikipedia\n  </a>\n  <a class=\"right\" routerLink=\"/\">&times;</a>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_article_lister_article_lister_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/article-lister/article-lister.component */ "./src/app/components/article-lister/article-lister.component.ts");
/* harmony import */ var _components_article_viewer_article_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/article-viewer/article-viewer.component */ "./src/app/components/article-viewer/article-viewer.component.ts");





var routes = [
    { path: "", component: _components_article_lister_article_lister_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListerComponent"] },
    { path: "article/:title", component: _components_article_viewer_article_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ArticleViewerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-endless-wiki';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/navigation/navigation.component */ "./src/app/components/layout/navigation/navigation.component.ts");
/* harmony import */ var _components_article_viewer_article_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/article-viewer/article-viewer.component */ "./src/app/components/article-viewer/article-viewer.component.ts");
/* harmony import */ var _components_article_lister_article_lister_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/article-lister/article-lister.component */ "./src/app/components/article-lister/article-lister.component.ts");
/* harmony import */ var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/article-preview/article-preview.component */ "./src/app/components/article-preview/article-preview.component.ts");
/* harmony import */ var _components_viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/viewer-header/viewer-header.component */ "./src/app/components/viewer-header/viewer-header.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _components_article_viewer_article_viewer_component__WEBPACK_IMPORTED_MODULE_7__["ArticleViewerComponent"],
                _components_article_lister_article_lister_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListerComponent"],
                _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArticlePreviewComponent"],
                _components_viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_10__["ViewerHeaderComponent"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/article-lister/article-lister.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/article-lister/article-lister.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    max-width: 1000px;\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    height: calc(100vh - 5rem);\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWxpc3Rlci9hcnRpY2xlLWxpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1saXN0ZXIvYXJ0aWNsZS1saXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/article-lister/article-lister.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/article-lister/article-lister.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleListerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListerComponent", function() { return ArticleListerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_get_random_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-random-articles.service */ "./src/app/services/get-random-articles.service.ts");



var ArticleListerComponent = /** @class */ (function () {
    function ArticleListerComponent(getRandomArticlesService) {
        this.getRandomArticlesService = getRandomArticlesService;
        this.articles = [];
    }
    ArticleListerComponent.prototype.onScroll = function () {
        var _this = this;
        if (((this.main.scrollHeight - this.main.scrollTop) * 0.8 <= this.main.clientHeight)) {
            setTimeout(function () { _this.getArticles(); }, 0);
        }
    };
    ArticleListerComponent.prototype.getArticles = function () {
        var _this = this;
        this.getRandomArticlesService.getArticles().subscribe(function (articles) {
            _this.articles = _this.articles.concat(articles);
        });
    };
    ArticleListerComponent.prototype.ngOnInit = function () {
        this.main = document.getElementById("main");
        this.main.scrollTo(0, 0);
        this.getArticles();
    };
    ArticleListerComponent.ctorParameters = function () { return [
        { type: src_app_services_get_random_articles_service__WEBPACK_IMPORTED_MODULE_2__["GetRandomArticlesService"] }
    ]; };
    ArticleListerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-lister',
            template: __webpack_require__(/*! raw-loader!./article-lister.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article-lister/article-lister.component.html"),
            styles: [__webpack_require__(/*! ./article-lister.component.css */ "./src/app/components/article-lister/article-lister.component.css")]
        })
    ], ArticleListerComponent);
    return ArticleListerComponent;
}());



/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  padding: 1em;\n  margin: 1em 0;\n  overflow: auto;\n  cursor: pointer;\n}\na {\n  text-decoration: none;\n  color: black;\n}\nh1 {\n  font-size: 1.5rem;\n}\np {\n  padding: 0;\n  text-align: justify;\n}\nimg {\n  margin-right: 1em;\n  float: left;\n  clear: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXByZXZpZXcvYXJ0aWNsZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsMEVBQTBFO0VBQzFFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbnAge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogbGVmdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ArticlePreviewComponent.prototype, "article", void 0);
    ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-preview',
            template: __webpack_require__(/*! raw-loader!./article-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article-preview/article-preview.component.html"),
            styles: [__webpack_require__(/*! ./article-preview.component.css */ "./src/app/components/article-preview/article-preview.component.css")]
        })
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/article-viewer/article-viewer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/article-viewer/article-viewer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  box-sizing: border-box;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: CALC(100vh - 117px);\n}\nmain {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXZpZXdlci9hcnRpY2xlLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXZpZXdlci9hcnRpY2xlLXZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IENBTEMoMTAwdmggLSAxMTdweCk7XG59XG5tYWluIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/article-viewer/article-viewer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/article-viewer/article-viewer.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleViewerComponent", function() { return ArticleViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_get_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/get-article.service */ "./src/app/services/get-article.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ArticleViewerComponent = /** @class */ (function () {
    function ArticleViewerComponent(route, getArticleService, sanitizer) {
        this.route = route;
        this.getArticleService = getArticleService;
        this.sanitizer = sanitizer;
        this.loadingArticleHTML = "<h1 style='font-family: Verdana, sans-serif; text-align: center;'>Article Loading...</h1>";
    }
    ArticleViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(this.loadingArticleHTML);
        this.title = this.route.snapshot.paramMap.get("title");
        this.getArticleService.getArticle(this.title).subscribe(function (articleData) {
            _this.articleHTML = _this.sanitizer.bypassSecurityTrustHtml(articleData);
        });
    };
    ArticleViewerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_get_article_service__WEBPACK_IMPORTED_MODULE_3__["GetArticleService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    ArticleViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-article-viewer",
            template: __webpack_require__(/*! raw-loader!./article-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article-viewer/article-viewer.component.html"),
            styles: [__webpack_require__(/*! ./article-viewer.component.css */ "./src/app/components/article-viewer/article-viewer.component.css")]
        })
    ], ArticleViewerComponent);
    return ArticleViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    background: black;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    margin: 0;\n    padding: 0 1rem;\n    height: 4rem;\n}\n\ndiv {\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.logo {\n\tcolor: white;\n\tline-height: 1em;\n\tpadding: 0 1em;\n\tmargin: 0;\n\ttext-align: center;\n\ttext-decoration: none;\n\tfont-size: 1.5em;\n}\n\n.button {\n    background: black;\n\tborder: none;\n\tcolor: white;\n\tfont-size: 1em;\n\tline-height: 3em;\n\tpadding: 0.5em 1em;\n\ttext-align: center;\n\ttext-decoration: none;\n    cursor: pointer;\n}\n\n.button:hover {\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t}\t\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIscUJBQXFCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG59XG5cbmRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxvZ28ge1xuXHRjb2xvcjogd2hpdGU7XG5cdGxpbmUtaGVpZ2h0OiAxZW07XG5cdHBhZGRpbmc6IDAgMWVtO1xuXHRtYXJnaW46IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDEuNWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRsaW5lLWhlaWdodDogM2VtO1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b246aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdGNvbG9yOiBibGFjaztcblx0fVx0Il19 */"

/***/ }),

/***/ "./src/app/components/layout/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/layout/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/viewer-header/viewer-header.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/viewer-header/viewer-header.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  top: 6px;\n  background: #7f7f7f;\n  border: none;\n  border-radius: 1em;\n  color: white;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  line-height: 40px;\n  padding: 0 14px;\n  margin: 5px 16px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1em;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3ZXItaGVhZGVyL3ZpZXdlci1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0VBQXdFO0VBQ3hFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld2VyLWhlYWRlci92aWV3ZXItaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdG9wOiA2cHg7XG4gIGJhY2tncm91bmQ6ICM3ZjdmN2Y7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgbWFyZ2luOiA1cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/viewer-header/viewer-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/viewer-header/viewer-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerHeaderComponent", function() { return ViewerHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewerHeaderComponent = /** @class */ (function () {
    function ViewerHeaderComponent() {
    }
    ViewerHeaderComponent.prototype.ngOnInit = function () {
        this.url =
            "https://en.wikipedia.org/wiki/" + encodeURIComponent(this.title);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ViewerHeaderComponent.prototype, "title", void 0);
    ViewerHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-viewer-header",
            template: __webpack_require__(/*! raw-loader!./viewer-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/viewer-header/viewer-header.component.html"),
            styles: [__webpack_require__(/*! ./viewer-header.component.css */ "./src/app/components/viewer-header/viewer-header.component.css")]
        })
    ], ViewerHeaderComponent);
    return ViewerHeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/get-article.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/get-article.service.ts ***!
  \*************************************************/
/*! exports provided: GetArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticleService", function() { return GetArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetArticleService = /** @class */ (function () {
    function GetArticleService(http) {
        this.http = http;
    }
    GetArticleService.prototype.getArticle = function (title) {
        var url = 'https://en.wikipedia.org/api/rest_v1/page/mobile-html/';
        url += encodeURIComponent(title);
        return this.http.get(url, { responseType: 'text' });
    };
    GetArticleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GetArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GetArticleService);
    return GetArticleService;
}());



/***/ }),

/***/ "./src/app/services/get-random-articles.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/get-random-articles.service.ts ***!
  \*********************************************************/
/*! exports provided: GetRandomArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomArticlesService", function() { return GetRandomArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var GetRandomArticlesService = /** @class */ (function () {
    function GetRandomArticlesService(http) {
        this.http = http;
        this.queryJSON = {
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
    }
    GetRandomArticlesService.prototype.createAPIurl = function (obj) {
        var result = 'https://en.wikipedia.org/w/api.php?';
        Object.keys(obj).forEach(function (queryKey) {
            result += '&' + queryKey + '=' + obj[queryKey];
        });
        return result;
    };
    GetRandomArticlesService.prototype.getArticles = function () {
        var articles = this.http.get(this.createAPIurl(this.queryJSON)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var articlesData = data;
            var result = [];
            Object.keys(articlesData.query.pages).forEach(function (articleDataId) {
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
        }));
        return articles;
    };
    GetRandomArticlesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GetRandomArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GetRandomArticlesService);
    return GetRandomArticlesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/D/Documents/Codes/Personal/angular-endless-wiki/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map