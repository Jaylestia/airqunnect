import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import {CbnchartComponent} from './cbnchart/cbnchart.component';
import {NtgchartComponent} from './ntgchart/ntgchart.component';
import {SlfchartComponent} from './slfchart/slfchart.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }, {
    path: 'chartjs',
    component: ChartjsComponent,
  }, {
      path: 'cbnchart',
      component: CbnchartComponent,
  }, {
      path: 'ntgchart',
      component: NtgchartComponent,
  }, {
      path: 'slfchart',
      component: SlfchartComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  D3Component,
  ChartjsComponent,
];
