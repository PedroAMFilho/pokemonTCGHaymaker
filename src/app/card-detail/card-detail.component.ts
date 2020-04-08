import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Card } from '../card';
import { CardContent } from '../card'
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() card: CardContent;
  
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
    .subscribe(card => this.card = card)
  }

  goBack(): void {
    this.location.back();
  }

}
