import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Noodles } from '../models/noodles';
import { NoodleService } from '../services/noodle.service';
import { Router } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {noodlesList} from "../Data/mock-content";
import {NoodlesListItemComponent} from "../noodles-list-item/noodles-list-item.component";
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-noodles-list',
  templateUrl: './noodles-list.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    UpperCasePipe,
    CurrencyPipe,
    MatButtonModule,
    NoodlesListItemComponent
  ],
  styleUrls: ['./noodles-list.component.css']
})
export class NoodlesListComponents implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'image', 'actions'];
  dataSource = new MatTableDataSource<Noodles>();

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private noodleService: NoodleService, private router: Router) {}

  ngOnInit() {
    this.noodleService.getnoodles().subscribe({
      next: (data: Noodles[]) => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort; // Added sorting functionality
      },
      error: err => console.error('Error fetching noodles list:', err),
      complete: () => console.log('Successfully fetched noodles list!')
    });
  }

  deleteNoodle(id: number) {
    this.noodleService.deleteNoodle(id);
  }

  editNoodle(noodle: Noodles) {
    this.router.navigate(['/modify-list-item'], { state: { noodle } });
  }
}
