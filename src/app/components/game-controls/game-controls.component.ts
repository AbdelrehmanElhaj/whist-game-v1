import { Component } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {
  startGame() {
    console.log('Game started!');
  }

  nextRound() {
    console.log('Next round!');
  }
}
