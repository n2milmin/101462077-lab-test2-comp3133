import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../mission';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mission-list',
  imports: [CommonModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  missionList: Mission[] = [];

  constructor(private fetchService: ApiService) { }

  ngOnInit() {
    this.fetchService.fetchData("https://api.spacexdata.com/v3/launches").subscribe((data: any) => {
      this.missionList = data.map((mission: any) => ({
        flight_number: mission.flight_number,
        mission_name: mission.mission_name,
        launch_year: mission.launch_year,
        details: mission.details,
        mission_patch_small: mission.mission_patch_small,
        rocket: {
          rocket_name: mission.rocket.rocket_name,
          rocket_type: mission.rocket.rocket_type,
        },
        links: {
          mission_patch_small: mission.links.mission_patch_small,
          article_link: mission.links.article_link,
          wikipedia: mission.links.wikipedia,
          video_link: mission.links.video_link,
        },
      }))
    })
  }
}
