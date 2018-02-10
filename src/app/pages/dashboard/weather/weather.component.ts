import { Component, OnInit } from '@angular/core';
import { WdetectService } from './wdetect.service';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
  today = Date.now();

    location = {
        city: 'lapasan',
        code: 'ph',
    };
    weather: any;
    value: any;

    constructor(private _weatherService: WdetectService) {

    }

    ngOnInit() {

        this.value = localStorage.getItem('location');

        if (this.value != null) {
            this.location = JSON.parse(this.value);
        }else {
            this.location = {
                city: 'lapasan',
                code: 'ph',

            }
        }

        this._weatherService.getWeather(this.location.city, this.location.code).subscribe(
            response => {
/*                console.log(response);*/
                this.weather = response;
            },
        );
    }

}
