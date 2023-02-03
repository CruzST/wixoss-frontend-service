import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardType } from 'src/app/dto/enum/cardType';
import { Colors } from 'src/app/dto/enum/color';
import { LrigTypeOrClass } from 'src/app/dto/enum/lrigTypeOrClass';
import { Rarity } from 'src/app/dto/enum/rarity';
import { Team } from 'src/app/dto/enum/team';
import { Timing } from 'src/app/dto/enum/timing';
import { CardDialogData } from 'src/app/dto/interfaces/CardDialogData';
import { Card } from 'src/app/dto/models/card';
import { ColorCost } from 'src/app/dto/models/colorCost';
import { DeckDataService } from 'src/app/services/deck/deck-data.service';

@Component({
    selector: 'card-dialog',
    templateUrl: './card-dialog.component.html',
    styleUrls: ['./card-dialog.component.scss'],
})
export class CardDialogComponent implements OnInit {
    card: Card;
    cardImgPathTEMP: string;
    cardSerial: string;
    cardTypeClass: string;
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: CardDialogData,
        private deckService: DeckDataService) {}
    cardInfoRows: {
        header: string;
        data: any;
    }[] = [];

    headersInOrder: string[] = [
        'Team',
        'Level',
        'Rarity',
        'Card Type',
        'Lrig Type/Class',
        'Limit',
        'Colors',
        'Grow Cost',
        'Cost',
        'Timing',
        'Effects',
        'Life Burst'
    ];



    ngOnInit(): void {
        this.card = this.data.card;
        console.log(this.data);
        this.cardSerial = `${this.card.serial.formatSet}-${this.card.serial.cardSet}-${this.card.serial.cardNumber}[EN]`;
        this.cardImgPathTEMP = this.deckService.getCardImage(this.cardSerial);
        this.cardTypeClass =
            this.card.cardType.toLocaleLowerCase() === CardType.PIECE.toLocaleLowerCase()? 'horizontal' : 'vertical';
        this.headersInOrder.forEach((header) => {
            this.cardInfoRows.push({
                header,
                data: null
            });
        });

        for (const key of Object.keys(this.card)) {
            if (this.card[key as keyof typeof this.card] !== null) {
                const headerIndex = this.cardInfoRows.findIndex((obj) => {
                    return obj.header.toLowerCase() === this.parseCardHeader(key).toLowerCase()
                });
                if (headerIndex > -1) {
                    this.cardInfoRows[headerIndex].data = this.parseCardValues(key, this.card[key as keyof typeof this.card]);
                }
            }
        }
        this.cardInfoRows = this.cardInfoRows.filter((obj) => {
            return obj.data !== null;
        });
    }


    parseCardHeader(header: string): string {
        if (header === 'lrigTypeOrClass') {
             return 'Lrig Type/Class'
        } else if (['growCost', 'lifeBurst', 'cardType'].indexOf(header) > -1) {
            return header.split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        } else {
            return header;
        }
    }

    parseCardValues(header: string, value: any): any {
        let returnValue: any;
        switch(header) {
            case 'cardType':
                returnValue = this.convertEnumToString(CardType, value);
                break;
            case 'colors':
                returnValue = [];
                value.forEach((color: Colors) => {
                    returnValue.push(`(${color})`);
                });
                returnValue = returnValue.join(', ');
                break;
            case 'cost':
                returnValue = [];
                value.forEach((cost: ColorCost)=> {
                    returnValue.push(`${cost.amount} x (${cost.color})`);
                });
                break;
            case 'effects':
            case 'lifeBurst':
                returnValue = [];
                value.abilityText.forEach((text: string) => {
                    if (text !==  "") {
                        returnValue.push(text);
                    }
                });
                returnValue = returnValue.join('\n\n');
                break;
            case 'growCost':
                const x = '\u{00D7}';
                returnValue = `${value.amount} x (${value.color})`;
                break;
            case 'lrigTypeOrClass':
                returnValue = this.convertEnumToString(LrigTypeOrClass, value);
                break;
            case 'rarity':
                returnValue = [];
                value.forEach((rarity: Rarity) => {
                    returnValue.push(this.convertEnumToString(Rarity, rarity));
                });
                returnValue = returnValue.join(', ');
                break;
            case 'team':
                returnValue = this.convertEnumToString(Team, value);
                break;
            case 'timing':
                returnValue = [];
                value.forEach((timing: Timing) => {
                    returnValue.push(this.convertEnumToString(Timing, timing));
                })
                returnValue = returnValue.join(', ');
                break;
            default:
                returnValue = value;
        }
        return returnValue;
    }

    convertEnumToString(enumType: any, value: any) {
        return enumType[value as keyof typeof enumType];
    }
}
