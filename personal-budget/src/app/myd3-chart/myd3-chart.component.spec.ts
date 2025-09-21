import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd3ChartComponent } from './myd3-chart.component';

describe('Myd3ChartComponent', () => {
  let component: Myd3ChartComponent;
  let fixture: ComponentFixture<Myd3ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Myd3ChartComponent]
    });
    fixture = TestBed.createComponent(Myd3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
