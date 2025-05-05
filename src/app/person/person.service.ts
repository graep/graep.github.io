import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private dataUrl = 'assets/data/person-data.json';

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person[]> {
    console.log('Fetching data from: ' + this.dataUrl);
    return this.http.get<Person[]>(this.dataUrl);
  }
}