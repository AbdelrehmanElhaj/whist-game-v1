import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trick-area',
  templateUrl: './trick-area.component.html',
  styleUrls: ['./trick-area.component.css']
})
export class TrickAreaComponent {
  @Input() playedCards: { player: string, card: string }[] = [];

  getCard(player: string): string {
    return this.playedCards.find(c => c.player === player)?.card ?? '';
  }
}
