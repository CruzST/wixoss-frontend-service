import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/dto/models/deck';
import { DeckMetaData } from 'src/app/dto/models/deckMetaData';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

    decks: DeckMetaData[];

    constructor(private deckService: DeckDataService) {}

    ngOnInit(): void {
        this.deckService.getAllMetaData().subscribe((resp: any) => {
            //console.log(resp)
            this.decks = resp;
            // TODO: Until a real sorting is planned out, the latest will be showed
            this.decks.sort((b, a) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());
        })
    }
}
