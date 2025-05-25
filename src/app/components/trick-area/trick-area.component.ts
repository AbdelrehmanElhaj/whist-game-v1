import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trick-area',
  templateUrl: './trick-area.component.html',
  styleUrls: ['./trick-area.component.css']
})
export class TrickAreaComponent {
  @Input() playedCards: { player: string, card: string }[] = [];

  getCard(position: 'top' | 'left' | 'right' | 'bottom'): string {
    const card = this.playedCards.find(c => c.player === position);
    return card?.card ?? '';
  }
}
