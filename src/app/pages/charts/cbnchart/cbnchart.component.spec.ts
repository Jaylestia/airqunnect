import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbnchartComponent } from './cbnchart.component';

describe('CbnchartComponent', () => {
  let component: CbnchartComponent;
  let fixture: ComponentFixture<CbnchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbnchartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbnchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
