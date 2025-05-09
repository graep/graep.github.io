import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureComponent } from './scripture.component';

describe('ScriptureComponent', () => {
  let component: ScriptureComponent;
  let fixture: ComponentFixture<ScriptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
