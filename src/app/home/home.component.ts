import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Covid } from '../models/covid';
import * as Highcharts from 'highcharts';

declare var require: any;
// tslint:disable-next-line:prefer-const
let Boost = require('highcharts/modules/boost');
// tslint:disable-next-line:prefer-const
let noData = require('highcharts/modules/no-data-to-display');
// tslint:disable-next-line:prefer-const
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  SAStas: Covid = null;
  rawData: any[] = [];
  countryData: any[] = [];
  covidInSA: any[] = [];
  options: any;
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

      this.options = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Covid-19, South Africa as of 18 March 2020'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: undefined
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer'
          }
        },
        series: [{
          name: 'Cases',
          colorByPoint: true,
          data: [{
            name: 'Confirmed',
            y: this.SAStas.Confirmed,
            sliced: true,
            selected: true
          }, {
            name: 'Recovered',
            y: this.SAStas.Recovered
          }, {
            name: 'Deaths',
            y: this.SAStas.Deaths
          }]
        }]
      };
      Highcharts.chart('container', this.options);
    });
}


getDetails() {
  return this.covidService.getCountryDetails('South Africa')
    .subscribe(response => {
      console.log(response[0].population);
    });
}


}
