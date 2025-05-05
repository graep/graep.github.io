import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './search.service';
import { Person } from '../person/person.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm ='';
  searchResults: Person[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchService.searchResults$.subscribe((results) => {
      this.searchResults = results;
    });
  }

  onSearch(): void {
    this.searchService.search(this.searchTerm);
  }

  selectPerson(person: Person){
    console.log('Selected person:', person);
    this.router.navigate(['/person', person.id]);
    this.searchTerm = '';
    this.searchResults = [];
  }

  ngOnDestroy(): void {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }

  
}