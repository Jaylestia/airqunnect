import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    {
      title: 'Carbon Monoxide',
      months: [
        { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
        { month: 'Feb 2 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '4.6', cost: '46.8973' },
        { month: 'Feb 4 2018', delta: '0', down: false, kWatts: '1000', cost: '0.7820' },
        { month: 'Feb 5 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        { month: 'Feb 6 2018', delta: '0', down: true, kWatts: '1.3294', cost: '0.5083' },
        { month: 'Feb 7 2018', delta: '0', down: false, kWatts: '0.9384', cost: '0.1564' },
        { month: 'Feb 8 2018', delta: '0', down: true, kWatts: '0', cost: '0.9384' },
        { month: 'Feb 9 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        { month: 'Feb 11 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        { month: 'Feb 12 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        { month: 'Feb 13 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 14 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 15 2018', delta: '1.83', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 16 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 17 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 18 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 19 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 20 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 21 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 22 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 23 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 24 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 25 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 26 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 27 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
          { month: 'Feb 28 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
      ],
    },
    {
      title: 'Sulfur Dioxide',
      active: true,
        months: [
            { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
            { month: 'Feb 2 2018', delta: '1.83', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '0.7', cost: '55.0782' },
            { month: 'Feb 4 2018', delta: '0', down: false, kWatts: '0.08534', cost: '53.7165' },
            { month: 'Feb 5 2018', delta: '0', down: true, kWatts: '0.1425', cost: '0.3265' },
            { month: 'Feb 6 2018', delta: '0', down: true, kWatts: '0.3317', cost: '0.4777' },
            { month: 'Feb 7 2018', delta: '0', down: false, kWatts: '0', cost: '0.0334' },
            { month: 'Feb 8 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 9 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 11 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 12 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 13 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 14 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 15 2018', delta: '1.83', down: true, kWatts: '806', cost: 'No Data' },
            { month: 'Feb 16 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 17 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 18 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 19 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 20 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 21 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 22 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 23 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 24 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 25 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 26 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 27 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 28 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        ],
    },
    {
      title: 'Nitrogen Dioxide',
        months: [
            { month: 'Feb 1 2018', delta: '0', down: true, kWatts: '0', cost: '0' },
            { month: 'Feb 2 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 3 2018', delta: '0', down: true, kWatts: '0.2932', cost: '0.4780' },
            { month: 'Feb 4 2018', delta: '0', down: false, kWatts: '0.0235', cost: '10000' },
            { month: 'Feb 5 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 6 2018', delta: '0', down: true, kWatts: '0.0587', cost: '0.0282' },
            { month: 'Feb 7 2018', delta: '0', down: false, kWatts: '0.02375', cost: '0.0466' },
            { month: 'Feb 8 2018', delta: '0', down: true, kWatts: '0', cost: '0.02111' },
            { month: 'Feb 9 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 11 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 12 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 13 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 14 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 15 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 16 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 17 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 18 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 19 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 20 2018', delta: '0', down: false, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 21 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 22 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 23 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 24 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 25 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 26 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 27 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
            { month: 'Feb 28 2018', delta: '0', down: true, kWatts: 'No Data', cost: 'No Data' },
        ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
