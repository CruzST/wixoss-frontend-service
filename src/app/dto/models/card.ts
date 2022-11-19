import { Ability } from "./ability";
import { ColorCost } from "./colorCost";
import { Image } from "./image";
import { Serial } from "./serial";

export class Card {
    id: string;
    name: string;
    rarity: Rarity[];
    cardType: CardType;
    LrigTypeOrClass: LrigTypeOrClass;
    colors: Colors[];
    level: number;
    growCost: ColorCost;
    cost: ColorCost;
    limit: string;
    power: number;
    team: Team;
    effects: Ability;
    lifeBurst: Ability;
    coin: string;
    format: string;
    serial: Serial;
    image: Image;
    timing: Timing[];
}