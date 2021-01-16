import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { FormsModule } from '@angular/forms';
import { PipehtmlPipe } from './pipehtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamComponent,
    FixtureComponent,
    AddTeamComponent,
    PipehtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
