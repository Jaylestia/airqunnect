import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbeComponent } from './airbe.component';

describe('AirbeComponent', () => {
  let component: AirbeComponent;
  let fixture: ComponentFixture<AirbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirbeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
