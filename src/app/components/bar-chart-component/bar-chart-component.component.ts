import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart-component.component.html',
  styleUrls: ['./bar-chart-component.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var myChart = new Chart('bar-chart', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Turnover',
            type: 'bar',
            data: [5.2, 5.3, 6, 5, 5.5, 6.2, 4, 5.2],
            backgroundColor: [
              'rgba(255, 3, 5, 0.1)',
              'rgba(255, 3, 5, 0.1)',
              'rgba(5, 3, 255, 0.1)',
              'rgba(255, 3, 5, 0.1)',
              'rgba(5, 3, 255, 0.1)',
              'rgba(5, 3, 255, 0.1)',
              'rgba(255, 3, 5, 0.1)',
              'rgba(255, 3, 5, 0.1)',
            ],
            borderColor: [
              'rgba(255, 3, 5, 1)',
              'rgba(255, 3, 5, 1)',
              'rgba(5, 3,  255, 1)',
              'rgba(255, 3, 5, 1)',
              'rgba(5, 3, 255, 1)',
              'rgba(5, 3, 255, 1)',
              'rgba(255, 3, 5, 1)',
              'rgba(255, 3, 5, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'dashed',
            type: 'line',
            data: [5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5],
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(0, 0, 0)',
          },
        ],
        labels: [
          '2009FY',
          '2010FY',
          '2011FY',
          '2012FY',
          '2013FY',
          '2014FY',
          '2015FY',
          '2016FY',
        ],
      },
      options: {
        scales: {
          yAxes: {
            beginAtZero: true,
            min: 0,
            max: 10.0,
            ticks: {
              stepSize: 5.0,
            },
          },
        },
      },
    });
  }
}
