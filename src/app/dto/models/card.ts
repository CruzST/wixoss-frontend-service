import { CardType } from "../enum/cardType";
import { Colors } from "../enum/color";
import { LrigTypeOrClass } from "../enum/lrigTypeOrClass";
import { Rarity } from "../enum/rarity";
import { Team } from "../enum/team";
import { Timing } from "../enum/timing";
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