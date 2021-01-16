import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  
  teams: Team[] = [];
  cantidadTeams: number = this.teams.length;
  generable:boolean = false;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    //this.teams = [];
    this.teams = this.teamService.getTeams();
  }

  deleteTeam(team: Team){
    //this.teams = this.teams.filter(x=> x.id != team.id);
    var i = this.teams.indexOf( team );
    i !== -1 && this.teams.splice( i, 1 );
    this.cantidadTeams --;
    this.generable = false;
  }

  getTeams(){
    return this.teams;
  }

  nuevoFixture(){
    this.generable = true;
  }
  
  getCantidadTeams(){
    return this.cantidadTeams;
  }

}
