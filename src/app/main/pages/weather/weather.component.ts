import { Component } from '@angular/core';
import { cardProps } from '../wind/wind.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  constructor() {}

  listOfCard: cardProps[] = [
    {
      title: 'Sea temperature',
      content: '6.1° C',
    },
    {
      title: 'Air pressure (QNH)',
      content: '1023.6 hPa',
    },
    {
      title: 'Air pressure (QFE)',
      content: '1018.1 hPa',
    },
  ];

  listOfCardSecond: cardProps[] = [
    {
      title: 'Humidity',
      content: '90 %',
    },
    {
      title: 'Air temperature',
      content: '6.9° C',
    },
    {
      title: 'Dew point',
      content: '5.3° C',
    },
  ];

  itemPerBox = 3;
}
