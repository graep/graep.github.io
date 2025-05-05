import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-display',
  standalone: true,
  imports: [CommonModule],
  template:` 
            <div class="timeline-container">
              <div class="timeline" *ngFor="let marker of markers">
              <span>{{ getFormattedYear(marker.year) }}</span>
                <span [ngStyle]="{
                    'font-weight': 'bold',
                    'font-size': '0.8em'}">
                  {{ getEra(marker.year) }}
                </span>
              </div>
            </div>
            `,
  styleUrl: './timeline-display.component.css'
})
export class TimelineDisplayComponent implements OnChanges {
  @Input() increment = 250;
  @Input() incrementCount: number | 'all' = 'all';
  @Input() numberOfMarkers: number = 20;

  startYear: number = -5000;
  markers: { year: number; label: number; position: number }[] = [];


  getDistributedMarkers(allMarkers: { year: number; label: number; position: number }[], count: number) {
    if (count >= allMarkers.length) {
      return allMarkers;
    }

    const step = allMarkers.length / count;
    return Array.from({ length: count }, (_, i) => allMarkers[Math.floor(i * step)]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['increment'] || changes['incrementCount']) {
      this.updateTimeline();
    }
  }

  updateTimeline(): void {
    const incrementValue = this.increment;
    const countValue = this.incrementCount;

    const endYear = this.startYear + (incrementValue * (this.numberOfMarkers - 1));

    const allMarkers = [];
    const timespan = endYear - this.startYear;
   

    for (let year = this.startYear; year <= endYear; year += incrementValue) {
      allMarkers.push({
        year: year,
        label: Math.abs(year),
        position: ((year - this.startYear) / timespan) * 100
      });
    }

    if (countValue === 'all') {
      this.markers = allMarkers;
    } else {
      const count = Math.min(countValue, allMarkers.length);
      this.markers = this.getDistributedMarkers(allMarkers, count);
    }
  }
  getFormattedYear(year: number): string {
    return `${Math.abs(year)}`;
  }
  getEra(year: number): string {
    return year < 0 ? 'BCE' : 'CE';
  }
}
