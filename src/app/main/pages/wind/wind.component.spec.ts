import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindComponent } from './wind.component';

describe('WindComponent', () => {
  let component: WindComponent;
  let fixture: ComponentFixture<WindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
