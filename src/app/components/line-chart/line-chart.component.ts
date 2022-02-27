import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
      labels: labels,
      datasets: [
        {
      label: 'Inventory Days of Supply',
          data: [65, 59, 80, 81, 56, 55, 40,
                 55, 35, 40, 50, 55, 75, 85],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.2,
        },
      ],
    };
     var chart = new Chart('line-chart', {
      type: 'line',
      data: data,
    });
  }
}
