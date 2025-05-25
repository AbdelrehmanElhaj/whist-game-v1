import { Component } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent {
  playedCards = [
    { player: 'top', card: '' },
    { player: 'left', card: '' },
    { player: 'right', card: '' },
    { player: 'bottom', card: '' }
  ];

  onPlayCard(card: string) {
    console.log('Card played:', card);
    const bottom = this.playedCards.find(c => c.player === 'bottom');
    if (bottom) {
      bottom.card = card;
    }
  }
}
