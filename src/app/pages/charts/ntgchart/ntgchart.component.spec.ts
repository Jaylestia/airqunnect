import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtgchartComponent } from './ntgchart.component';

describe('NtgchartComponent', () => {
  let component: NtgchartComponent;
  let fixture: ComponentFixture<NtgchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtgchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtgchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
