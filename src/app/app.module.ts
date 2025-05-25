import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { TrickAreaComponent } from './components/trick-area/trick-area.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTableComponent,
    PlayerHandComponent,
    TrickAreaComponent,
    ScoreboardComponent,
    GameControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
