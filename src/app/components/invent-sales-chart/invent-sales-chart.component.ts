import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-invent-sales-chart',
  templateUrl: './invent-sales-chart.component.html',
  styleUrls: ['./invent-sales-chart.component.css'],
})
export class InventSalesChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var myChart = new Chart('invent-sales-chart', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Inventory to sales',
            type: 'bar',
            data: [1.8, 1.8, 1.9, 2.0, 1.8],
            backgroundColor: [
              'rgb(0, 0, 255)',
              'rgb(0, 0, 255)',
              'rgb(0, 0, 255)',
              'rgb(0, 0, 255)',
            ],
            borderColor: [],
            borderWidth: 1,
          },
          {
            label: 'Trend line',
            type: 'line',
            data: [1.8, 1.8, 1.8, 1.8, 1.8],
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
        ],
        labels: ['Week-1', 'Week-6', 'Week-11', 'Week-16', 'Week-21'],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Past Weeks',
            },
          },
          yAxes: {
            beginAtZero: true,
            min: 0.0,
            max: 4.0,
            ticks: {
              stepSize: 2.0,
            },
          },
        },
      },
    });
  }
}
