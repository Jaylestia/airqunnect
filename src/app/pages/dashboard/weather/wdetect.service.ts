import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WdetectService {

  apiKey= 'c7deba11f249e0052ccac67284f1d3c5';
  url;

  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

    getWeather(city, code) {
        return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());

    }

}
