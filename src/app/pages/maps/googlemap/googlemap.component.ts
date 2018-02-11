import { Component, OnInit } from '@angular/core';
import { ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
  selector: 'ngx-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss'],
})
export class GooglemapComponent implements OnInit {
    latitude: any;
    longitude: any;
    lat_long: any;

  constructor(private eService: ChartdataService) {
      this.lat_long = this.eService.getChartLocation();
      this.latitude = this.lat_long;
      this.longitude = this.lat_long;
  }

  ngOnInit() {
  }

}
