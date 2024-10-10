import {Component, OnInit} from '@angular/core';
import {NoodlesListItemComponent} from "../noodles-list-item/noodles-list-item.component";
import {NgForOf} from "@angular/common";
import {Noodles} from "../models/noodles";
import {NoodleService} from "../services/noodle.service";

@Component({
  selector: 'app-noodles-list',
  standalone: true,
  imports: [
    NoodlesListItemComponent,
    NgForOf
  ],
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.css' ]  // Updated from 'styleUrl' to 'styleUrls'
})



export class NoodlesListComponents {
  displayedColumns :string[] = ["id", "name","price","image"];
  noodles :Noodles[] = [];

  constructor(private noodleService : NoodleService) {
  }

  ngOnInit() {
    this.noodleService.getnoodles().subscribe({
      next : (data :Noodles[]) => this.noodles = data,
      error:err => console.error("Error fetching noodles list", err),
      complete:() => console.log("Successfully fetching noodles list!")
    })
  }
  selectedNoodles? :Noodles;
  selectNoodle(noodle : Noodles): void {
    this.selectedNoodles = noodle;
  }
}

export class NoodlesListComponent {
}
