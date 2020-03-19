import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  provinces = [{
    id: 1,
    Name: 'Eastern Cape',
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 2,
    Name: 'Free State',
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 3,
    Name: 'Gauteng',
    Confirmed: 61,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 4,
    Name: 'KwaZulu-Natal',
    Confirmed: 19,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 5,
    Name: 'Limpopo',
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 6,
    Name: 'Mpumalanga',
    Confirmed: 4,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 7,
    Name: 'North West',
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 8,
    Name: 'Northern Cape',
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0
  },
  {
    id: 9,
    Name: 'Western Cape',
    Confirmed: 31,
    Deaths: 0,
    Recovered: 0
  }];
  baseNewsUrl = 'http://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=46f5ff1f20d14bf3bd3b30441868b517';
  nationUrl = 'https://restcountries.eu/rest/v2/name/';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/' +
      'Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields' +
      '=Country_Region,Confirmed,Deaths,Recovered,Last_Update,Active&orderByFields=Confirmed%20desc',
      { responseType: 'json' });
  }

  getNews() {
    return this.http.get(this.baseNewsUrl, { responseType: 'json' });
  }

  getCountryDetails(name) {
    return this.http.get(this.nationUrl + name);
  }

  getProvinceData() {
    return this.provinces;
  }
}
