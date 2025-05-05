import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDataComponent } from './timeline-data.component';

describe('TimelineDataComponent', () => {
  let component: TimelineDataComponent;
  let fixture: ComponentFixture<TimelineDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
