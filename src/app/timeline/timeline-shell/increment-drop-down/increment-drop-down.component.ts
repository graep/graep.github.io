import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment-drop-down',
  standalone: true,
  imports: [CommonModule],
  template: `
            <div class="dropdown-container">
            <div class="dropdown-group">
              <label for="increment-select">Increment: </label>
              <select 
                id="increment-select" 
                [value]="selectedIncrement" 
                (change)="onIncrementChange($event)"
                class="dropdown"
              >
                <option *ngFor="let option of incrementOptions" [value]="option.value">
                  {{option.label}}
                </option>
              </select>
            </div>
            <div class="dropdown-group">
              <label for="count-select">Show: </label>
              <select 
                id="count-select" 
                [value]="selectedCount" 
                (change)="onCountChange($event)"
                class="dropdown"
              >
                <option *ngFor="let option of countOptions" [value]="option.value">
                  {{option.label}}
                </option>
              </select>
            </div>
            </div>
          `,
  styleUrls: ['./increment-drop-down.component.css']
})

export class IncrementDropDownComponent {
  @Input() selectedIncrement: number = 50;
  @Input() selectedCount: number | 'all' = 'all';
  
  @Output() incrementChange = new EventEmitter<number>();
  @Output() countChange = new EventEmitter<number | 'all'>();
  
  incrementOptions = [
    { value: 50, label: '50 Years' },
    { value: 100, label: '100 Years' },
    { value: 250, label: '250 Years' },
    { value: 500, label: '500 Years' }
  ];
  
  countOptions = [
    { value: 'all', label: 'All Markers' },
    { value: 15, label: '15 Markers' },  
    { value: 10, label: '10 Markers' },
    { value: 5, label: '5 Markers' },
  ];
  
  onIncrementChange(event: any): void {
    const value = parseInt(event.target.value, 10);
    this.incrementChange.emit(value);
  }
  
  onCountChange(event: any): void {
    const value = event.target.value === 'all' ? 'all' : parseInt(event.target.value, 10);
    this.countChange.emit(value);
  }
}