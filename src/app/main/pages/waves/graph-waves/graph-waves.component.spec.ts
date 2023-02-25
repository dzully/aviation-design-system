import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphWavesComponent } from './graph-waves.component';

describe('GraphWavesComponent', () => {
  let component: GraphWavesComponent;
  let fixture: ComponentFixture<GraphWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphWavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
