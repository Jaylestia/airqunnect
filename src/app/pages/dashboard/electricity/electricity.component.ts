import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChartdataService} from '../../../@core/data/chartdata.service';


@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  input_data: Array<any>;

  type = 'Carbon Monoxide';
  types = ['Carbon Monoxide'/*, 'Sulfur Dioxide', 'Nitrogen Dioxide'*/];
  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ChartdataService, private themeService: NbThemeService) {
    this.input_data = this.eService.getInputData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
