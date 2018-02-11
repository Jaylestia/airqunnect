import {Component, OnDestroy} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';
import {ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
    selector: 'ngx-handheld-line',
    template: `
        <chart type="line" [data]="data" [options]="options"></chart>
    `,
})

export class HandheldLineComponent implements OnDestroy {
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
                    data: this.chart_data[3],
                    label: 'Carbon Monoxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
                    borderColor: colors.primary,
                }, {
                    data: this.chart_data[4],
                    label: 'Nitrogen Dioxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
                    borderColor: colors.danger,
                }, {
                    data: this.chart_data[5],
                    label: 'Sulfur Dioxide',
                    backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
                    borderColor: colors.info,
                },
                ],
            };

            this.options = {
                responsive: true,
                maintainAspectRatio: false,
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
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
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

