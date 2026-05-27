import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HallService } from '../../services/hall';

@Component({
  selector: 'app-hall-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './hall-list.html',
  styleUrls: ['./hall-list.css'],
})
export class HallList implements OnInit {

  halls: any[] = [];

  loading = true;

  constructor(
    private hallService: HallService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getAllHalls();

  }

  getAllHalls() {

    this.loading = true;

    this.hallService.getAllActiveHalls().subscribe({

      next: (data: any) => {

        console.log(data);

        this.halls = data;

        this.loading = false;

      },

      error: (err) => {

        console.log(err);

        this.loading = false;

      }

    });

  }

  addHall() {

    this.router.navigate(['/hall-form']);

  }

  editHall(id: string) {

    this.router.navigate(['/hall-form', id]);

  }

}