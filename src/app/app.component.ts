import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  url: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.url = 'about';
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(
      url => this.changeCss(url)
    );
  }

  changeCss(url: string) {
    // this.url = 'home';
  }

}
