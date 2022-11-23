import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/dto/models/deck';
import { DeckContent } from 'src/app/dto/models/deckContent';

@Component({
    selector: 'wixoss-deck',
    templateUrl: './wixoss-deck.component.html',
    styleUrls: ['./wixoss-deck.component.scss'],
})
export class WixossDeckComponent implements OnInit {
    @Input()
    deck: Deck;
    
    constructor() {}

    ngOnInit(): void {

    }
}
