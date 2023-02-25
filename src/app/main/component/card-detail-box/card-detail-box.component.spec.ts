import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailBoxComponent } from './card-detail-box.component';

describe('CardDetailBoxComponent', () => {
  let component: CardDetailBoxComponent;
  let fixture: ComponentFixture<CardDetailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
