import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NgForOf, NgIf} from "@angular/common";
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment4';

}
