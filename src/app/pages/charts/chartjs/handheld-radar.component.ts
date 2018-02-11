import {Component, OnDestroy} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';
import {ChartdataService} from '../../../@core/data/chartdata.service';

@Component({
    selector: 'ngx-handheld-radar',
    template: `
        <chart type="radar" [data]="data" [options]="options"></chart>
    `,
})
export class HandheldRadarComponent implements OnDestroy {
    options: any;
    data: {};
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
                    label: 'Series A',
                    borderColor: colors.danger,
                    backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.5),
                }, {
                    data: this.chart_data[3],
                    label: 'Series B',
                    borderColor: colors.warning,
                    backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.5),
                }],
            };

            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
