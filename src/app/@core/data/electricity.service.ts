import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {
    private data;
  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
