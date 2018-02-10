import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WdetectService} from '../weather/wdetect.service';


@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnInit, OnDestroy {

    weather: any;
    value: any;
  temperature = 27;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

    location = {
        city: 'lapasan',
        code: 'ph',
    };



  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _weatherService: WdetectService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
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

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
