import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-viewer-header",
  templateUrl: "./viewer-header.component.html",
  styleUrls: ["./viewer-header.component.css"]
})
export class ViewerHeaderComponent implements OnInit {
  @Input() title: string;
  url: string;
  constructor() {}

  ngOnInit() {
    this.url =
      "https://en.wikipedia.org/wiki/" + encodeURIComponent(this.title);
  }
}
