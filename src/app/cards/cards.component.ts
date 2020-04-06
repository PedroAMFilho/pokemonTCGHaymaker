import { Component, OnInit } from '@angular/core';
import { CardModel } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: CardModel['cards'];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);
  }
}
