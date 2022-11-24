import { Component, Input, OnInit } from '@angular/core';
import { CardType } from 'src/app/dto/enum/cardType';
import { Card } from 'src/app/dto/models/card';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
  selector: 'wixoss-card',
  templateUrl: './wixoss-card.component.html',
  styleUrls: ['./wixoss-card.component.scss']
})
export class WixossCardComponent implements OnInit {

  @Input()
  card: Card;
  @Input()
  amount?: number;
  
  cardSerial: string;
  cardImgPathTEMP: string;
  cardTypeClass: string;

  constructor(private deckService: DeckDataService) { }

  ngOnInit(): void {
    this.cardSerial = `${this.card.serial.formatSet}-${this.card.serial.cardSet}-${this.card.serial.cardNumber}[EN]`;
    this.cardImgPathTEMP = this.deckService.getCardImage(this.cardSerial);
    if (this.card.cardType.toLocaleLowerCase() === CardType.PIECE.toLocaleLowerCase()) {
      console.log('true')
    }
    this.cardTypeClass = this.card.cardType.toLocaleLowerCase() === CardType.PIECE.toLocaleLowerCase() ? 'horizontal' : 'vertical';
    console.log(this.cardImgPathTEMP)
  }

}
