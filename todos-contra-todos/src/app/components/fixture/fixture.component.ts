import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  generarFixture(teams: Team[]){
    /*La idea es tomar la totalidad de quipos registrados (validando antes que sean un numero N par >3) y asignarle a cada uno un numero del 1 a N
    Luego divido los equipos en dos arreglos de N/2 elementos y los voy haciendo "girar" en sentido horario para generar todos 
    los enfrentamientos posibles, dejando el equipo 1 FIJO, cada "giro" implica una nueva fecha*/

  }
}
