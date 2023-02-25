import { Component } from '@angular/core';

export interface cardProps {
  title: string;
  content: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cards: cardProps[] = [
    {
      title: 'Direction (10 min. avg.)',
      content: '320°',
    },
    {
      title: 'Speed (10 min. avg.)',
      content: '12 kts',
    },
    {
      title: 'Gust',
      content: '---',
    },
  ];
}
