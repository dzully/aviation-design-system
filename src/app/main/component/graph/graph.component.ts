import { Component } from '@angular/core';
import Chart, { ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  constructor() {}

  graphOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          dash: [2, 5],
          dashOffset: 0,
        },
      },
      y: {
        border: {
          dash: [2, 5],
          dashOffset: 0,
        },
        min: 0,
        max: 12,
        labels: ['0', '2', '4', '6', '8', '10', '12'],
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: 'monotone',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    aspectRatio: 2.5,
  };

  labels = [
    '11:00:00',
    '11:30:00',
    '12:00:00',
    '12:30:00',
    '13:00:00',
    '13:30:00',
  ];

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;
  public chart2: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Sales',
            data: [6, 10, 6, 8, 5, 7, 5, 6, 8, 6],
            backgroundColor: '#377C76',
            fill: false,
            borderColor: '#377C76',
            borderDash: [2, 5],
            tension: 0.1,
          },
        ],
      },
      options: {
        ...this.graphOptions,
        scales: {
          ...this.graphOptions.scales,
          y: {
            // @ts-ignore
            ...this.graphOptions.scales.y,
            // @ts-ignore
            title: {
              display: true,
              text: 'Speed m/s',
            },
          },
        },
      },
    });

    this.chart2 = new Chart('MyChart2', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Sales',
            data: [6, 10, 6, 8, 5, 7, 5, 6, 8, 6],
            backgroundColor: '#377C76',
            fill: false,
            borderColor: '#377C76',
            borderDash: [2, 5],
            tension: 0.1,
          },
        ],
      },
      options: {
        ...this.graphOptions,
        scales: {
          ...this.graphOptions.scales,
          y: {
            // @ts-ignore
            ...this.graphOptions.scales.y,
            // @ts-ignore
            title: {
              display: true,
              text: 'Direction',
            },
          },
        },
      },
    });
  }
}
