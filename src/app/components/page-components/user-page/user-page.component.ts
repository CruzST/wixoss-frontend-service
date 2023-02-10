import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckMetaData } from 'src/app/dto/models/deckMetaData';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  ownerId: number;
  decks: DeckMetaData[];

  constructor(private route: ActivatedRoute, private deckService: DeckDataService, private router: Router) { }

  ngOnInit(): void {
    this.ownerId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deckService.getAllMetaData(this.ownerId)
    .subscribe({
      next: (resp) => {
        console.log(resp)
        this.decks = resp;
      },
      error: () => {
        this.router.navigate(['/notFound']);
      }
    });
  }

}
