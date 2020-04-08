import { Component, OnInit } from '@angular/core';
import { Cards } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  cards: Cards['cards'];

  constructor(private cardService: CardService) { }

  ngOnInit() {
     this.getCards();
  }

   getCards(): void {
     this.cardService.getCards()
       .subscribe(cards => this.cards = cards);
   }
}