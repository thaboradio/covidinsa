import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Covid } from '../models/covid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  SAStas: Covid = null;
  rawData: any[] = [];
  countryData: any[] = [];
  covidInSA: any [] = [];

  constructor(private covidService: CovidService) {
    this.countryData = [];
  }

  ngOnInit() {
    console.log('On Init');
    this.getData();
    // this.getDetails();
  }

  // console.log(this.countryData[0][0].attributes);
  getData() {
    return this.covidService.getData()
      .subscribe(res => {
        console.log();
        // tslint:disable-next-line:no-string-literal
        this.rawData.push(res['features']);
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.rawData[0].length; j++) {
          this.countryData.push(this.rawData[0][j].attributes);
        }
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countryData.length; i++) {
          if (this.countryData[i].Country_Region === 'South Africa') {
            this.covidInSA.push(this.countryData[i]);
          }
        }
        this.SAStas = {
          Country: this.covidInSA[0].Country_Region,
          Active: this.covidInSA[0].Active,
          Confirmed: this.covidInSA[0].Confirmed,
          Deaths: this.covidInSA[0].Deaths,
          Recovered: this.covidInSA[0].Recovered,
          LastUpdate: this.covidInSA[0].Last_Update
        };
      });
  }


  getDetails() {
    return this.covidService.getCountryDetails('South Africa')
    .subscribe(response => {
      console.log(response[0].population);
    });
  }
}
