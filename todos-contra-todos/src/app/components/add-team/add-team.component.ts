import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  name:string = '';

  constructor(private teamService: TeamService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.name != ''){
      const team = new Team();
      team.name = this.name;

      this.teamService.addTeam(team);
      this.router.navigate(['/']);
    }
    
  }

}
