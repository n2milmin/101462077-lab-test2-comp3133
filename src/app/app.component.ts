import { Component } from '@angular/core';
import { MissionListComponent } from './mission-list/mission-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MissionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101462077-lab-test2-comp3133';
  
  constructor(private router: Router) {}

  onMissionSelected(missionId: string) {
    this.router.navigate(['/mission-details', missionId]);
  }
}
