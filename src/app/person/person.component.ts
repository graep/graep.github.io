import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptureComponent } from '../scripture/scripture.component';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, ScriptureComponent],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: Person = { id: 0, name: '', father: '', mother: '', spouse: '',children: [] };
  @Input() allPersons: Person[] = [];
  @Input() isSpouse: boolean = false;
  isExpanded: boolean = false;

  toggleProfile() {
    this.isExpanded = !this.isExpanded;
  }
}