import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {
  @Output() filtered = new EventEmitter<string>();

  year: string = '';

  changeFilter() {
    this.filtered.emit(this.year);
  }
}
