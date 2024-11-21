import { Component } from '@angular/core';
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";
import {HoverHighlightDirective} from "./hover-highlight.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [NoodlesListComponents, HoverHighlightDirective]
})
export class AppComponent {

  title = 'Assignment4';

}
