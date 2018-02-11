import {Component, OnDestroy} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';
import {ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
    selector: 'ngx-chartjs-bar',
    template: `
        <chart type="bar" [data]="data" [options]="options"></chart>
    `,
})
export class ChartjsBarComponent implements OnDestroy {
    data: any;
    options: any;
    themeSubscription: any;
    chart_data: any;
    chart_date: any;
    chart_ave_data: any;

    constructor(private eService: ChartdataService, private theme: NbThemeService) {
        this.chart_data = this.eService.getChartData();
        this.chart_ave_data = this.eService.getAverageChartData();
        this.chart_date = this.eService.getChartDate();
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;

            this.data = {
                labels: this.chart_date,
                datasets: [{
                    data: this.chart_data[0],
                    label: 'Carbon Monoxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
                }, {
                    data: this.chart_data[1],
                    label: 'Nitrogen Dioxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                }, {
                    data: this.chart_data[2],
                    label: 'Sulfur Dioxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                }],
            };

            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
