import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardType } from 'src/app/dto/enum/cardType';
import { Rarity } from 'src/app/dto/enum/rarity';
import { CardDialogData } from 'src/app/dto/interfaces/CardDialogData';
import { Card } from 'src/app/dto/models/card';
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

    headersInOrder: string[] = ['Team', 'Level', 'Rarity', 'Card Type', 'Lrig Type/Class', 'Limit', 'Colors', 'Grow Cost', 'Effects', 'Life Burst'];



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
                    this.cardInfoRows[headerIndex].data = this.card[key as keyof typeof this.card];
                }
            }
        }
        this.cardInfoRows = this.cardInfoRows.filter((obj) => {
            return obj.data !== null;
        });
    }


    parseCardHeader(header: string) {
        if (header === 'lrigTypeOrClass') {
             return 'Lrig Type/Class'
        } else if (['growCost', 'lifeBurst', 'cardType'].indexOf(header) > -1) {
            return header.split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        } else {
            return header;
        }
    }



    // might stil use this, create a function to parse the values if needed
    parseCardKeyValues(key: string, value: any) {
        let parsedObj = {
            header: '',
            data: '',
        };

        // fix the values
        parsedObj.data = value;
        


        if (key === 'lrigTypeOrClass') {
            parsedObj.header = 'fix this later'
        } else if (['growCost', 'lifeBurst', 'cardType'].indexOf(key) > -1) {
            parsedObj.header = key.split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        } else {
            parsedObj.header = key;
        }
        
        return parsedObj;
    }

    convertEnumToString(valueToFind: string, enumType: string): any {
        const enumValues = enumType === 'rarity' ? Rarity : CardType;
        return Object.values(enumValues)[
            Object.keys(enumValues).indexOf(valueToFind)
        ];
    }
}
