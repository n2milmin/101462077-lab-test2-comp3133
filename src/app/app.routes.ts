import { Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
    { path: '', component: MissionListComponent },
    { path: 'details/:id', component: MissionDetailsComponent },
];
