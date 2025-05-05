import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../person/person.model';
import { SearchComponent } from './search.component';

 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private people: Person[] = [];
  private searchResultsSubject = new BehaviorSubject<Person[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPeople();
   }
  
   private loadPeople(): void {
    this.http.get<Person[]>('assets/data/person-data.json')
     .subscribe((data) => {
        this.people = data;
      });
  
  }
  search(query: string): void {
    if (!query?.trim) {
      this.searchResultsSubject.next([]);
      return;
    }

    const searchTerm = query.toLocaleLowerCase();

    const results = this.people.filter(person => 
      person.name.toLowerCase().includes(searchTerm)
    );

    this.searchResultsSubject.next(results);
  
   
  }
}