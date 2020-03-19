import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newCollections: any [] = [];
  page  = 1;

  constructor(private covidService: CovidService, public router: Router) { }

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
    this.router.navigateByUrl(url);
  }
}
