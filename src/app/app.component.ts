import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  url: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(
      d => {
        this.url = this.router.url;
      }
    );

  }

  changeCss(url: string) {
  }

}
