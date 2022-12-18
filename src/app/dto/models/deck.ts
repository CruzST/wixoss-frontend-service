import { Card } from "./card";
import { DeckContent } from "./deckContent";

export class Deck {
    deckId: number;
    name: string;
    owner: string;
    description: string;
    lastUpdated: Date;
    mainDeckContent: DeckContent[];
    lrigDeckContent: DeckContent[];
}