import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  scores = [
    { player: 'North', points: 3 },
    { player: 'South', points: 4 },
    { player: 'East', points: 2 },
    { player: 'West', points: 5 }
  ];
}
