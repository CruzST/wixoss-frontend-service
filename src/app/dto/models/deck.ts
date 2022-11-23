import { Card } from "./card";
import { DeckContent } from "./deckContent";

export class Deck {
    deckId: number;
    deckName: string;
    mainDeckContent: DeckContent[];
    lrigDeckContent: DeckContent[];
}