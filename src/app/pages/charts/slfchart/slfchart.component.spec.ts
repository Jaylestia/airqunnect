import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlfchartComponent } from './slfchart.component';

describe('SlfchartComponent', () => {
  let component: SlfchartComponent;
  let fixture: ComponentFixture<SlfchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlfchartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlfchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
