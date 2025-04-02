import { Component } from '@angular/core';
import { Mission } from '../mission';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mission-details',
  imports: [MatCardModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {
  mission: Mission | null = null;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.apiService.getDetails(this.id).subscribe((data: Mission) => {
        this.mission = data;
      }, (error) => {
        console.log(error)
        this.router.navigate(['/'])
      })
    }
  }
}
