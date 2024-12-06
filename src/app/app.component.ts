import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {HighlightOnFocusDirective} from "./highlight-on-focus.directive";
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterOutlet,
    RouterLink,
    HighlightOnFocusDirective,
    NoodlesListComponents
  ]
})
export class AppComponent {
  title = "Assignment 10";
}
