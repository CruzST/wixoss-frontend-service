import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Deck } from 'src/app/dto/models/deck';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
  selector: 'deck-view-page',
  templateUrl: './deck-view-page.component.html',
  styleUrls: ['./deck-view-page.component.scss']
})
export class DeckViewPageComponent implements OnInit {
  deckId: string;
  deck: Deck;

  constructor(private route: ActivatedRoute, private deckService: DeckDataService, private router: Router) { }

  ngOnInit(): void {
    console.log('in init')
    this.deckId = this.route.snapshot.paramMap.get('id');
    this.deckService.getSingleDeck(this.deckId)
    .subscribe({
      next: (resp) => {
        this.deck = resp;
      },
      error: () => {
        this.router.navigate(['/notFound']);
      }
    });
  }

}