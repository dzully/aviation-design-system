import { Component, Input } from '@angular/core';
import { cardProps } from '../../pages/main/main.component';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  constructor() {}

  @Input() listOfCard: cardProps[] | undefined;
}
