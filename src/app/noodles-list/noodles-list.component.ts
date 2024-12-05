import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Noodles } from '../models/noodles';
import { NoodleService } from '../services/noodle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.css']
})
export class NoodlesListComponents implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'image', 'actions'];
  dataSource = new MatTableDataSource<Noodles>();

  constructor(private noodleService: NoodleService, private router: Router) {}

  ngOnInit() {
    this.noodleService.getnoodles().subscribe({
      next: (data: Noodles[]) => this.dataSource.data = data,
      error: err => console.error('Error fetching noodles list', err),
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
