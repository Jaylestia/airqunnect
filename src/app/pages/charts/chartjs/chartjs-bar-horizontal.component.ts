import {Component, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
    selector: 'ngx-chartjs-bar-horizontal',
    template: `
        <chart type="horizontalBar" [data]="data" [options]="options"></chart>
    `,
})
export class ChartjsBarHorizontalComponent implements OnDestroy {
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
                    label: 'Dataset 1',
                    backgroundColor: colors.infoLight,
                    borderWidth: 1,
                    data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                }, {
                    label: 'Dataset 2',
                    backgroundColor: colors.successLight,
                    data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
                },
                ],
            };

            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
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
                    yAxes: [
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
                },
                legend: {
                    position: 'right',
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

    private random() {
        return Math.round(Math.random() * 100);
    }
}
