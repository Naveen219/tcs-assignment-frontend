import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventSalesChartComponent } from './invent-sales-chart.component';

describe('InventSalesChartComponent', () => {
  let component: InventSalesChartComponent;
  let fixture: ComponentFixture<InventSalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventSalesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
