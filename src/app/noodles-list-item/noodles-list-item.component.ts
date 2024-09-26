import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-noodles-list-item',
  standalone: true,
  imports: [],
  templateUrl: './noodles-list-item.component.html',
  styleUrl: './noodles-list-item.component.css'
})
export class NoodlesListItemComponent {
  @Input() noodle!: { name: string; price: number; }


}
