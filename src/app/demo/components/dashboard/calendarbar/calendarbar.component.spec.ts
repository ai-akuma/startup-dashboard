import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarbarComponent } from './calendarbar.component';

describe('CalendarbarComponent', () => {
  let component: CalendarbarComponent;
  let fixture: ComponentFixture<CalendarbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
