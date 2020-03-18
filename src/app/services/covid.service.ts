import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
baseNewsUrl = 'http://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=46f5ff1f20d14bf3bd3b30441868b517';
nationUrl = 'https://restcountries.eu/rest/v2/name/';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/' +
                          'Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields' +
                          '=Country_Region,Confirmed,Deaths,Recovered,Last_Update,Active&orderByFields=Confirmed%20desc',
                          {responseType: 'json'});
  }

  getNews() {
    return this.http.get(this.baseNewsUrl, {responseType: 'json'});
  }

  getCountryDetails(name) {
    return this.http.get(this.nationUrl + name);
  }
}
