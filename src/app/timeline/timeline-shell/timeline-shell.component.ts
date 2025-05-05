import { Component } from '@angular/core';
import { TimelineDisplayComponent } from '../timeline-display/timeline-display.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonComponent } from "../../person/person.component";
import { IncrementDropDownComponent } from './increment-drop-down/increment-drop-down.component';
import { Person } from '../../person/person.model';


@Component({
  selector: 'app-timeline-shell',
  standalone: true,
  imports: [TimelineDisplayComponent, 
            ReactiveFormsModule, 
            FormsModule, 
            CommonModule, 
            PersonComponent, 
            IncrementDropDownComponent],
  template:`
          <app-timeline-display 
            [increment]="selectedIncrement" 
            [incrementCount]="selectedCount">
          </app-timeline-display>
          <div class="timeline-person-container">
            <app-person>
            </app-person>
            <app-person></app-person>
          </div>
          <app-increment-drop-down
            [selectedIncrement]="selectedIncrement"
            [selectedCount]="selectedCount"
            (incrementChange)="onIncrementChange($event)"
            (countChange)="onCountChange($event)">
          </app-increment-drop-down>
          `,
  styleUrl: './timeline-shell.component.css'
})

export class TimelineShellComponent  {

  selectedIncrement = 50;
  selectedCount: number | 'all' = 'all';
  

  onIncrementChange(value: number): void {
    this.selectedIncrement = value;
  }

  onCountChange(value: number | 'all'): void {
  this.selectedCount = value;
  }
}