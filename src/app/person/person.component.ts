
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptureComponent } from '../scripture/scripture.component';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ScriptureComponent, CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersonData();
  }

  loadPersonData() {
    this.personService.getPerson().subscribe({
      next: (data) => {
        this.persons = data;
      },
      error: (error) => {
        console.error('Error loading person data:', error);
      }
    });
  }
}