import { Component } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import { cardProps } from '../wind/wind.component';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent {
  constructor() {}

  cardHeight: string = '100%';
  cards: cardProps[] = [
    {
      title: 'Significant wave height',
      content: '0.95 m',
    },
  ];

  cardBox: cardProps[] = [
    {
      title: 'Tide',
      content: '0.00 m',
    },
    {
      title: 'Mean wave period',
      content: '5.40 s',
    },
    {
      title: 'Air gap',
      content: '21.43 m',
    },
    {
      title: 'Max. wave height',
      content: '1.56 m',
    },
  ];

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
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
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
    this.chart = new Chart('waves-chart', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Hs (m)',
            data: [0.6, 0.8, 1.2, 0.2, 0.5, 0.1],
            backgroundColor: '#4099DA',
            fill: false,
            borderColor: '#4099DA',
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
              text: 'Hs (m)',
            },
          },
        },
      },
    });
  }
}
