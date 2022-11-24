import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/dto/models/deck';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

    decks: Deck[];

    constructor(private deckService: DeckDataService) {}

    ngOnInit(): void {
        this.deckService.getAllDecks().subscribe((resp: any) => {
            this.decks = resp;
        })
    }
}
