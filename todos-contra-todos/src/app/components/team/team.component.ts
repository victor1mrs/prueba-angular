import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  
  @Input() team: Team = new Team();
  @Output() deleteTeam: EventEmitter<Team> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(team: Team){
    this.deleteTeam.emit(team);
  }

  onToggle(team: Team){
    team.selected = !team.selected;
  }

}
