import { Component } from '@angular/core';
import {NoodlesListItemComponent} from "../noodles-list-item/noodles-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-noodles-list',
  standalone: true,
  imports: [
    NoodlesListItemComponent,
    NgForOf
  ],
  templateUrl: './noodles-list.component.html',
  styleUrl: './noodles-list.component.css'
})
export class NoodlesListComponents{
  noodles = [
    { name:'Ramen', price: 5.00 },
    { name:'Soba', price: 6.00 },
    { name:'Udon', price: 7.00},
    { name:'Spaghetti', price: 4.50}
  ];


}
