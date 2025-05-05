import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDropDownComponent } from './increment-drop-down.component';

describe('IncrementDropDownComponent', () => {
  let component: IncrementDropDownComponent;
  let fixture: ComponentFixture<IncrementDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
