import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DeckDataService {
    deckEndpoint: string = environment.backendServiceLocal + '/deck';
    cardImgEndpointTEMP: string = 'assets/images';
    

    constructor(private http: HttpClient) {}

    getAllDecks(): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(this.deckEndpoint + '/all', {
            headers: headers
        });
    }

    getSingleDeck(id: string): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(`${this.deckEndpoint}/${id}`, {
            headers: headers
        });
    }

    getDeckMetaData(id: string): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(`${this.deckEndpoint}/metaData/${id}`, {
            headers: headers
        });
    }

    getCardImage(serial: string): string {
        return `${this.cardImgEndpointTEMP}/${serial}.jpg`;
    }
}
