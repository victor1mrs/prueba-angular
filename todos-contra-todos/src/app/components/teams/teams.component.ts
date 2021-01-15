import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  
  teams: Team[] = [];//
  constructor() { }

  ngOnInit(): void {
    this.teams = [
      {
        id: 0,
        name: 'Nacional',
        selected: false
      },
      {
        id: 1,
        name: 'Defensor',
        selected: true
      }
    ];
  }

  deleteTeam(team: Team){
    this.teams = this.teams.filter(x=> x.id != team.id);
  }
}
