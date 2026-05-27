import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallService } from '../../services/hall';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-hall-list',
  imports: [NgFor, NgIf],
  templateUrl: './hall-list.html',
  styleUrl: './hall-list.css',
})
export class HallList implements OnInit {
  halls: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private hallService: HallService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadHalls();
  }

  loadHalls() {
    this.loading = true;
    this.hallService.getAllActiveHalls().subscribe({
      next: (data: any) => {
        this.halls = Array.isArray(data) ? data : [data];
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load halls.';
        this.loading = false;
      },
    });
  }

  addHall() {
    this.router.navigate(['/halls/add']);
  }

  editHall(id: string) {
    this.router.navigate(['/halls/edit', id]);
  }
}