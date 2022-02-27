import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart-component.component.html',
  styleUrls: ['./pie-chart-component.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const data = {
      labels: ['Overdue', 'Defect', 'Damage', 'Other'],
      datasets: [
        {
          label: '',
          data: [31, 25.5, 16.9, 26.5],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(2, 186, 36)',
            'rgb(252, 132, 3)',
            'rgb(252, 3, 48)',
          ],
          hoverOffset: 2,
        },
      ],
    };
    var chart = new Chart('pie-chart', {
      type: 'pie',
      data: data,
    });
  }
}
