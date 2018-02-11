import { Injectable } from '@angular/core';


@Injectable()
export class ChartdataService {

  private chart_data = [[0, 0, 0.05778, 0.6378, 0, 0.28543, 0.02815, 0.06686, 0, 0]
                        , [0, 0, 0.393, 1.183, 0, 0.036, 0.036, 0.006, 0.12 , 0]
                        , [0, 0, 0.51, 0.277, 0, 0.261, 0.382, 0.013, 0, 0]
                        , [0, 0, 0.05778, 0.6378, 0, 0.28543, 0.02815, 0.06686, 0, 0]
                        , [0, 0.7, 0.393, 1.183, 0, 0.036, 0.036, 0.006, 0.12 , 0]
                        , [0.8, 0, 0.51, 0.277, 0, 0.261, 0.382, 0.013, 0, 0]];

  private chart_ave_data;
  private chart_date = ['2-1-18', '2-2-18', '2-3-18', '2-4-18', '2-5-18', '2-6-18'
                        , '2-7-18', '2-8-18', '2-9-18', '2-10-18' ];
  private lat_long = [[8.4914, 8.4835, 8.4849, 8.4914, 8.4914] , [124.5944, 124.6616, 124.6510, 124.5944, 124.5944]];

  /* Rules of Array of Array
    1.Carbon Monoxide Data
    2.Nitrogen Dioxide Data
    3.Sulfur Dioxide Data
    4.Average of Carbon
   */

    private input_data = [
        {
            title: 'Carbon Monoxide',
            months: [
                { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
                { month: 'Feb 2 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
                { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '4.6', cost: '46.8973' },

            ],
        },
        {
            title: 'Sulfur Dioxide',
            active: true,
            months: [
                { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
                { month: 'Feb 2 2018', delta: '1.83', down: true, kWatts: 'No Data', cost: 'No Data' },
                { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '0.7', cost: '55.0782' },

            ],
        },
        {
            title: 'Nitrogen Dioxide',
            months: [
                { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
                { month: 'Feb 2 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
                { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '0.2932', cost: '0.4780' },

            ],
        },
    ];

  constructor() {

  }
  getInputData() {
      return this.input_data;
  }
  getChartDate() {
      return this.chart_date;
  }
  getChartLocation() {
      return this.lat_long;
  }
  getChartData() {

      return this.chart_data;
  }
  getAverageChartData() {

      let sum_ntg = 0;
      let sum_slf = 0;
      let sum_cbn = 0;
      let ave_cbn;
      let ave_ntg;
      let ave_slf;

      let sum_ntg_h = 0;
      let sum_slf_h = 0;
      let sum_cbn_h = 0;
      let ave_cbn_h;
      let ave_ntg_h;
      let ave_slf_h;
      for (let i = 0; i < this.chart_data[0].length; i++) {
          sum_cbn = sum_cbn + this.chart_data[0][i];
      }
      ave_cbn = (sum_cbn / (this.chart_data[0].length));
      for (let i = 0; i < this.chart_data[1].length; i++) {
          sum_ntg = sum_ntg + this.chart_data[1][i];
      }
      ave_ntg = (sum_ntg / (this.chart_data[1].length));
      for (let i = 0; i < this.chart_data[2].length; i++) {
          sum_slf = sum_slf + this.chart_data[2][i];
      }
      ave_slf = (sum_slf / (this.chart_data[2].length));

      for (let i = 0; i < this.chart_data[3].length; i++) {
          sum_cbn_h = sum_cbn_h + this.chart_data[3][i];
      }
      ave_cbn_h = (sum_cbn / (this.chart_data[3].length));
      for (let i = 0; i < this.chart_data[4].length; i++) {
          sum_ntg_h = sum_ntg_h + this.chart_data[4][i];
      }
      ave_ntg_h = (sum_ntg_h / (this.chart_data[4].length));
      for (let i = 0; i < this.chart_data[5].length; i++) {
          sum_slf_h = sum_slf_h + this.chart_data[5][i];
      }
      ave_slf_h = (sum_slf_h / (this.chart_data[5].length));
      this.chart_ave_data = [[ave_cbn, ave_ntg, ave_slf], [ave_cbn_h, ave_ntg_h, ave_slf_h]];
      return this.chart_ave_data;
  }

}
