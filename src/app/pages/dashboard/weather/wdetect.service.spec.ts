import { TestBed, inject } from '@angular/core/testing';

import { WdetectService } from './wdetect.service';

describe('WdetectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WdetectService]
    });
  });

  it('should be created', inject([WdetectService], (service: WdetectService) => {
    expect(service).toBeTruthy();
  }));
});
