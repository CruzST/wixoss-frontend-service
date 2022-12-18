import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/dto/models/card';
import { Deck } from 'src/app/dto/models/deck';
import { DeckContent } from 'src/app/dto/models/deckContent';
import { CardDialogComponent } from '../dialogs/card-dialog/card-dialog.component';


@Component({
    selector: 'wixoss-deck',
    templateUrl: './wixoss-deck.component.html',
    styleUrls: ['./wixoss-deck.component.scss'],
})
export class WixossDeckComponent implements OnInit {
    @Input()
    deck: Deck;
    
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {

    }

    openCardDialog(card: Card) {
        this.dialog.open(CardDialogComponent, {
            data: {
                card
            }
        });
    }
}
