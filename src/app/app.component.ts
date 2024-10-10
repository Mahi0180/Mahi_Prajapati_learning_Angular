import { Component } from '@angular/core';
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [NoodlesListComponents]
})
export class AppComponent {

  title = 'Assignment4';

}
