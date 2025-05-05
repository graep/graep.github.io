import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../person/person.component';
import { Person } from '../person/person.model';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-family-tree',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  persons: Person[] = [];
  mainLineage: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersonData();
  }

  loadPersonData() {
    this.personService.getPerson().subscribe({
      next: (data) => {
        this.persons = data;
        this.mainLineage = this.getMainLineage();
      },
      error: (error) => {
        console.error('Error loading person data:', error);
      }
    });
  }

  getMainLineage(): Person[] {
    interface LineageEntry {
      id: number;
      name: string;
    }
    const mainLineage: LineageEntry[] = [
      { id: 1, name: 'Abraham' },
      { id: 2, name: 'Isaac' },
      { id: 3, name: 'Jacob' },
      { id: 4, name: 'Judah' },
      { id: 5, name: 'Perez' },
      { id: 6, name: 'Hezron' },
      { id: 7, name: 'Ram' }, 
      { id: 8, name: 'Amminadab' },
      { id: 9, name: 'Nahshon' },
      { id: 10, name: 'Salmon' },
      { id: 11, name: 'Boaz' },
      { id: 12, name: 'Obed' },
      { id: 13, name: 'Jesse' },
      { id: 14, name: 'David' },
      { id: 15, name: 'Solomon' },
      { id: 16, name: 'Rehoboam' },
      { id: 17, name: 'Abijah' },
      { id: 18, name: 'Asa' },
      { id: 19, name: 'Jehoshaphat' },
      { id: 20, name: 'Jehoram' },
      { id: 21, name: 'Uzziah' },
      { id: 22, name: 'Jotham' },
      { id: 23, name: 'Ahaz' },
      { id: 24, name: 'Hezekiah' },
      { id: 25, name: 'Manasseh' },
      { id: 26, name: 'Amon' },
      { id: 27, name: 'Josiah' },
      { id: 28, name: 'Jeconiah' },
      { id: 29, name: 'Shealtiel' },
      { id: 30, name: 'Zerubbabel' },
      { id: 31, name: 'Abiud' },
      { id: 32, name: 'Eliakim' },
      { id: 33, name: 'Azor' },
      { id: 34, name: 'Zadok' },
      { id: 35, name: 'Akim' },
      { id: 36, name: 'Eliud' },
      { id: 37, name: 'Eleazar' },
      { id: 38, name: 'Matthan' },
      { id: 39, name: 'Jacob' },
      { id: 40, name: 'Joseph' },
      { id: 41, name: 'Jesus' }
   ];
    
    return mainLineage
      .map(entry => this.persons.find(p => p.id === entry.id))
      .filter((person): person is Person => person !== undefined);
  }

  isLast(person: Person): boolean {
    return this.mainLineage.indexOf(person) === this.mainLineage.length - 1;
  }
}