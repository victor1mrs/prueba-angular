import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from 'src/app/services/team.service';
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer) {
  }

  transform(v:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  teams: Team[] = this.teamService.getTeams();
  fechas: number[] = this.obtenerFechas();
  local: string[] = this.obtenerLocales();
  visitante: string[] = this.obtenerVisitantes();
  partidos: number[] = this.obtenerPartidos();
  cantEquipos: number = this.teams.length;
  
  fixture:string = this.generarFixture();

  ngOnInit(): void {
  }
  
  obtenerFechas():number[]{
    let retorno:number[]=[];
    for(let i=1; i<this.teams.length;i++){
      retorno.push(i);
    }
    console.log(retorno);
    return retorno;
  }
  obtenerPartidos():number[]{
    let retorno:number[]=[];
    for(let i=1; i<=this.teams.length/2;i++){
      retorno.push(i);
    }
    console.log(retorno);
    return retorno;
  }

  obtenerLocales():string[]{
    let locales:string[]=[];
    for(let i=0; i<this.teams.length/2;i++){
      locales.push(this.teams[i].name);
    }
    return locales;
  }

  obtenerVisitantes():string[]{
    let visitantes:string[]=[];
    for(let i=this.teams.length/2; i<this.teams.length;i++){
      visitantes.push(this.teams[i].name);
    }
    return visitantes;
  }

  siguienteFecha(){
    let aux= this.local[this.cantEquipos/2-1];
    for(let i=2;i<this.cantEquipos/2;i++){
      this.local[i] = this.local[i-1];
    }
    this.local[1] = this.visitante[0];
    for(let j=this.cantEquipos/2-2;j>=0;j--){
      this.visitante[j] = this.visitante[j+1];
    }
    this.visitante[this.cantEquipos/2-1] = aux;
  }

  generarFixture():string{
    let fixture ='';
    for(let i=1;i<this.cantEquipos;i++){
      fixture+=`
      <div class="row"><b>Fecha número: ${i}</b></div>
      `;
      for(let j=0;j<this.cantEquipos/2;j++){
        fixture+=`
        <div class="row">${this.local[j]} - ${this.visitante[j]}</div>`;
      }
      fixture+=`<br><hr><br>`;
      this.siguienteFecha();
    }
    return fixture;
  }
}


    /*const myMaybeNullElement = window.document.getElementById("fixture");
    if (myMaybeNullElement === null) {
      alert('oops');
    } else {
      myMaybeNullElement.innerHTML = fixture;
    }*/