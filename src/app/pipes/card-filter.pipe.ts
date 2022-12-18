import { Pipe, PipeTransform } from "@angular/core";
import { Card } from "../dto/models/card";
import { DeckContent } from "../dto/models/deckContent";


@Pipe({name: 'cardFilter'})
export class CardFilter implements PipeTransform {
    transform(values: DeckContent[], filterType: string, filterKeyword: string): DeckContent[] {
        let cardList: DeckContent[];
        if (filterType === 'level') {
            cardList = values.filter(deckContent => {
                return deckContent.card.level.toString() === filterKeyword;
            });
        }
        else if (filterType === 'cardType') {
            cardList = values.filter(deckContent => {
                return deckContent.card.cardType === filterKeyword
            });
        }
        return cardList;
    }
}
