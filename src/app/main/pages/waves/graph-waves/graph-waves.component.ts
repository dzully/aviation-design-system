import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph-waves',
  templateUrl: './graph-waves.component.html',
  styleUrls: ['./graph-waves.component.css'],
})
export class GraphWavesComponent {
  constructor() {}

  @Input() withTitle: boolean = true;
  @Input() chart: any;
}
