import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptureComponent } from './scripture/scripture.component';
import { PersonComponent } from "./person/person.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScriptureComponent, PersonComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lineage';
}
