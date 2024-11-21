import { Component } from '@angular/core';
import {NoodlesListComponents} from "./noodles-list/noodles-list.component";
import {HoverHighlightDirective} from "./hover-highlight.directive";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ModifyListItemComponent} from "./modify-list-item/modify-list-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [NoodlesListComponents, ModifyListItemComponent, HoverHighlightDirective, RouterOutlet, RouterLink]
})
export class AppComponent {

  title = 'Assignment4';

}
