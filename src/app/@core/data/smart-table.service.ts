import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    date: '2/1/2018',
    location: 'Lapasan, CDO Philippines',
    duration: '24',
    cbn: '0',
    ntg: '0',
    slf: '0',
  },
      {
          date: '2/3/2018',
          location: 'Lapasan, CDO Philippines',
          duration: '24',
          cbn: '3,805.778',
          ntg: '0.393',
          slf: '42.51',
      },
      {
          date: '2/4/2018',
          location: 'Lapasan, CDO Philippines',
          duration: '24',
          cbn: '6,463.78',
          ntg: '327.183',
          slf: '5.277',
      },
      {
          date: '2/6/2018',
          location: 'Lapasan, CDO Philippines',
          duration: '24',
          cbn: '28.543',
          ntg: '0.036',
          slf: '0.261',
      },
      {
          date: '2/7/2018',
          location: 'Lapasan, CDO Philippines',
          duration: '24',
          cbn: '6.686',
          ntg: '0.006',
          slf: '0.013',
      },

  ];

  getData() {
    return this.data;
  }
}
