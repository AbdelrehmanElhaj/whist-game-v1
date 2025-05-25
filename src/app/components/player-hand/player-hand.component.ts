import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html'
})
export class PlayerHandComponent {
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Output() playCard = new EventEmitter<string>();

  dummyCards = ['🂡', '🂢', '🂣', '🂤', '🂥'];

  getPositionClasses() {
    switch (this.position) {
      case 'top': return 'top-4 left-1/2 -translate-x-1/2';
      case 'bottom': return 'bottom-4 left-1/2 -translate-x-1/2';
      case 'left': return 'left-4 top-1/2 -translate-y-1/2 flex-col';
      case 'right': return 'right-4 top-1/2 -translate-y-1/2 flex-col';
      default: return '';
    }
  }

  handleCardClick(card: string) {
    if (this.position === 'bottom') {
      this.playCard.emit(card);
    }
  }
}
