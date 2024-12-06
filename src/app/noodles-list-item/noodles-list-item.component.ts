import { Component, Input } from '@angular/core';
import { Noodles } from '../models/noodles';
import {MatCardModule} from "@angular/material/card";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-noodles-list-item',
  templateUrl: './noodles-list-item.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    UpperCasePipe,
    CurrencyPipe,
    MatButtonModule,
    MatTableModule,
    MatSortModule
  ],
  styleUrls: ['./noodles-list-item.component.css']
})
export class NoodlesListItemComponent {
  @Input() noodle!: Noodles;

  dataSource = new MatTableDataSource<Noodles>();
}
