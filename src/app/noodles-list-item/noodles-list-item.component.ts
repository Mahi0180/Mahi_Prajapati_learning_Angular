import {Component, input, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-noodles-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './noodles-list-item.component.html',
  styleUrl: './noodles-list-item.component.css'
})
export class NoodlesListItemComponent {
  @Input() noodle!: { name: string; price: number; }


}
