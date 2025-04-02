import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Mission } from '../mission';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  missionList: Mission[] = [];
  filteredMissions: Mission[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMissions().subscribe(data => {
      console.log(data)
      this.missionList = data.map(mission => ({
        flight_number: mission.flight_number,
        mission_name: mission.mission_name,
        launch_year: mission.launch_year,
        details: mission.details ?? 'No details available', 
        mission_patch_small: mission.links?.mission_patch_small ?? '', 

        rocket: {
          rocket_name: mission.rocket?.rocket_name ?? 'Unknown Rocket', 
          rocket_type: mission.rocket?.rocket_type ?? 'Unknown Type'
        },
        
        links: {
          mission_patch_small: mission.links?.mission_patch_small ?? '',
          article_link: mission.links?.article_link ?? '#', 
          wikipedia: mission.links?.wikipedia ?? '#',
          video_link: mission.links?.video_link ?? '#'
        }
      }));

      this.filteredMissions = [...this.missionList];
    })
  }
}
