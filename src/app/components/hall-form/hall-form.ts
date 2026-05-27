import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HallService } from '../../services/hall';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hall-form',
  imports: [FormsModule, NgIf],
  templateUrl: './hall-form.html',
  styleUrl: './hall-form.css',
})
export class HallForm implements OnInit {
  isEditMode = false;
  hallId = '';
  successMessage = '';
  errorMessage = '';
  loading = false;

  hall = {
    name: '',
    location: '',
    capacity: 0,
    hasProjector: false,
    hasAc: false,
    hasWhiteboard: false,
  };

  constructor(
    private hallService: HallService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.hallId = this.route.snapshot.paramMap.get('id') || '';
    if (this.hallId) {
      this.isEditMode = true;
      this.hallService.getHallById(this.hallId).subscribe({
        next: (data: any) => {
          this.hall = data;
        },
        error: () => {
          this.errorMessage = 'Failed to load hall data.';
        },
      });
    }
  }

  submit() {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.isEditMode) {
      const updateData = { id: this.hallId, ...this.hall };
      this.hallService.updateHall(updateData).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Hall updated successfully!';
          setTimeout(() => this.router.navigate(['/halls']), 1500);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Failed to update hall.';
        },
      });
    } else {
      this.hallService.saveHall(this.hall).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Hall saved successfully!';
          setTimeout(() => this.router.navigate(['/halls']), 1500);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = 'Failed to save hall.';
        },
      });
    }
  }

  cancel() {
    this.router.navigate(['/halls']);
  }
}