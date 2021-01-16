import { Injectable } from '@angular/core';
import { Team } from '../models/team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams:Team[] = [
    {
      name: 'Nacional',
      selected: false
    },
    {
      name: 'Defensor',
      selected: true
    }
  ];
  
  constructor() { }

  getTeams(){
    return this.teams;
  }

  addTeam(team:Team){
    this.teams.unshift(team);
  }
}
