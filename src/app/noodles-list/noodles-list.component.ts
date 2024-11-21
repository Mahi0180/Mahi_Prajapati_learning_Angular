import {Component, HostListener, OnInit} from '@angular/core';
import {NoodlesListItemComponent} from "../noodles-list-item/noodles-list-item.component";
import {CurrencyPipe, DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {Noodles} from "../models/noodles";
import {NoodleService} from "../services/noodle.service";
import {Router} from "@angular/router";
import {HoverHighlightDirective} from "../hover-highlight.directive";

@Component({
  selector: 'app-noodles-list',
  standalone: true,
  imports: [
    NoodlesListItemComponent,
    NgForOf,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    HoverHighlightDirective
  ],
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.css' ]  // Updated from 'styleUrl' to 'styleUrls'
})

export class NoodlesListComponents {
  displayedColumns :string[] = ["id", "name","price","image","manufactureDate","expiryDate"];
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

  protected readonly HostListener = HostListener;
}

export class NoodlesListComponent {
  // @ts-ignore
  noodles$ = this.noodleService.noodles$;

  constructor(private noodleService: NoodleService, private router: Router) {}

  deleteNoodle(id: number) {
    this.noodleService.deleteNoodle(id);
  }

  editNoodle(noodle: Noodles) {
    // Navigate to the form component with the selected noodle data
    this.router.navigate(['/modify-list-item'], { state: { noodle } });
  }
}
