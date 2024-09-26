import { Component } from '@angular/core';

@Component({
  selector: 'app-noodles-list',
  standalone: true,
  imports: [],
  templateUrl: './noodles-list.component.html',
  styleUrl: './noodles-list.component.css'
})
export class NoodlesListComponent {
  noodleItems = [
    { dish: 'Ramen', cost: 5.50, details: 'Traditional Japanese noodle soup with rich broth' },
    { dish: 'Soba', cost: 6.00, details: 'Buckwheat noodles served cold with a dipping sauce' },
    { dish: 'Udon', cost: 7.25, details: 'Thick wheat noodles served in a light broth' },
    { dish: 'Spaghetti', cost: 4.75, details: 'Italian pasta with tomato sauce and herbs' }
  ];

}
