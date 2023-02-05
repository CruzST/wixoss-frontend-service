import { Component, Input, OnInit } from '@angular/core';
import { DeckMetaData } from 'src/app/dto/models/deckMetaData';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
  selector: 'wixoss-deck-meta-data',
  templateUrl: './wixoss-deck-meta-data.component.html',
  styleUrls: ['./wixoss-deck-meta-data.component.scss']
})
export class WixossDeckMetaDataComponent implements OnInit {

  @Input()
  deckMetaData: DeckMetaData;

  cardImgPathTEMP: string;

  constructor(private deckService: DeckDataService) { }

  ngOnInit(): void {
    this.cardImgPathTEMP = this.deckService.getDeckCoverImage();
  }

}
