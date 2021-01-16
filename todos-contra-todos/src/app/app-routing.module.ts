import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  },
  {
    path: 'add',
    component: AddTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
