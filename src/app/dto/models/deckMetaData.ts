import { UserMetaData } from "./userMetaData";

export class DeckMetaData {
    creationDate: Date;
    deckName: string;
    description: string;
    id: number;
    lastUpdated: Date;
    views: number;
    wixossUser: UserMetaData;    
}