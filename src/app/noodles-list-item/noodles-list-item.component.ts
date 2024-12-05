import { Component, Input } from '@angular/core';
import { Noodles } from '../models/noodles';

@Component({
  selector: 'app-noodles-list-item',
  templateUrl: './noodles-list-item.component.html',
  styleUrls: ['./noodles-list-item.component.css']
})
export class NoodlesListItemComponent {
  @Input() noodle!: Noodles;
}
