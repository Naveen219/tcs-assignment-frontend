import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css'],
})
export class MixedChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const mixedChart = new Chart('mixed-chart', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Website Traffic',
            type: 'line',
            data: [
              700000, 550000, 750000, 780000, 760000, 780000, 720000, 650000,
              730000, 740000, 750000, 800000,
            ],
            fill: false,
            backgroundColor: 'rgb(255, 0, 0)',
            borderColor: 'rgb(255, 0, 0)',
            tension: 1,
          },
          {
            label: 'Foot Traffic',
            data: [
              100000, 120000, 120000, 110000, 110000, 110000, 120000, 110000,
              110000, 110000, 120000,
            ],
            type: 'line',
            fill: false,
            backgroundColor: 'rgb(0, 0, 255)',
            borderColor: 'rgb(0, 0, 255)',
            tension: 1,
          },
        ],
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
          yAxes: {
            title: {
              display: true,
              text: 'Value',
            },
            min: 0,
            max: 1000000,
            ticks: {
              stepSize: 200000,
            },
          },
        },
      },
    });
  }
}
