import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.toggle('active');
  }
}
