import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineShellComponent } from './timeline-shell.component';

describe('TimelineShellComponent', () => {
  let component: TimelineShellComponent;
  let fixture: ComponentFixture<TimelineShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
