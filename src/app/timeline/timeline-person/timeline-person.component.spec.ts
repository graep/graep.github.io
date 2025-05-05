import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePersonComponent } from './timeline-person.component';

describe('TimelinePersonComponent', () => {
  let component: TimelinePersonComponent;
  let fixture: ComponentFixture<TimelinePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
