import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'covidinsa';
  tagline = 'Corona Virus in South Africa.';
  newCollections: any [] = [];
  page  = 1;

 constructor(private covidService: CovidService, private route: Router) {
 }
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    return this.covidService.getNews()
    .subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      this.newCollections.push(res['articles']);
      console.log(this.newCollections[0]);
    });
  }

  viewArticle(url) {
    this.route.navigateByUrl(url);
  }
}
