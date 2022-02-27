import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart-component/bar-chart-component.component';
import { PieChartComponent } from './pie-chart-component/pie-chart-component.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { InventSalesChartComponent } from './invent-sales-chart/invent-sales-chart.component';



@NgModule({
  declarations: [BarChartComponent, PieChartComponent, LineChartComponent, MixedChartComponent, DoughnutChartComponent, InventSalesChartComponent],
  exports: [BarChartComponent, PieChartComponent, LineChartComponent,MixedChartComponent, DoughnutChartComponent, InventSalesChartComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
