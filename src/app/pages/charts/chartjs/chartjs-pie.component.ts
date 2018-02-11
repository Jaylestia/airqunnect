import {Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
    selector: 'ngx-chartjs-pie',
    template: `
        <chart type="pie" [data]="data" [options]="options"></chart>
    `,
})
export class ChartjsPieComponent implements OnDestroy {
    data2: any;
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
                labels: ['Carbon Monoxide', 'Nitrogen Dioxide', 'Sulfur Dioxide'],
                datasets: [{
                    data: this.chart_ave_data[0],
                    backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                }],
            };

            this.data2 = {
                labels: ['Carbon Monoxide', 'Nitrogen Dioxide', 'Sulfur Dioxide'],
                datasets: [{
                    data: [5.001832, 279.5296, 9.686],
                    backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                }],
            };

            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
