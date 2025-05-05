import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineShellComponent } from './timeline-shell/timeline-shell.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineShellComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}