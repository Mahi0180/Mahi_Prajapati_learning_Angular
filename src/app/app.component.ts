import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Noodles} from "./modules/noodles";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Noodles Shop';

  noodlesList: Noodles[] = [
    {name: 'Ramen', type: 'Wheat', origin: 'Japan', isSpicy: true, price: 8.99},
    {name: 'Pho', type: 'Rice', origin: 'vietnam', isSpicy: false, price: 9.99},
    {name: 'Pad Thai', type: 'Rice', origin: 'Thailand', isSpicy: true, price: 11.99},
    {name: 'Soba', type: 'Buckwheat', origin: 'Japan', isSpicy: false, price: 7.99},
    {name: 'Lo Mein',type: 'Wheat', origin: 'China', isSpicy: false, price: 10.99},
    {name: 'Spicy Korean Noodles', type: 'Wheat', origin: 'Korea', isSpicy: true, price: 12.99}
  ]
}
