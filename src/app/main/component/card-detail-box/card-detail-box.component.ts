import { Component, Input } from '@angular/core';
import { cardProps } from '../../pages/wind/wind.component';

@Component({
  selector: 'app-card-detail-box',
  templateUrl: './card-detail-box.component.html',
  styleUrls: ['./card-detail-box.component.css'],
})
export class CardDetailBoxComponent {
  constructor() {}

  @Input() listOfCard: cardProps[] | undefined;
}
