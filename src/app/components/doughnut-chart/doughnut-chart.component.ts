import { Component, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data = {
      labels: ['Admin', 'Risk', 'Freight', 'Service', 'Storage'],
      datasets: [
        {
          label: '',
          data: [40, 25, 20, 10, 5],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 255, 0)',
            'rgb(255, 0, 0'
          ],
          hoverOffset: 2,
        },
      ],
    };
    var chart = new Chart('doughnut-chart', {
      type: 'doughnut',
      data: data,
    });
  }

}
