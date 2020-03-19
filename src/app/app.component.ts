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

 constructor() {
 }
  ngOnInit() {

  }
}
