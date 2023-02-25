import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  constructor() {}

  @Input() withTitle: boolean = true;
  @Input() chart: any;
  @Input() chart2: any;
}
