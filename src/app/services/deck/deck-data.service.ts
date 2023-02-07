import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMetaData } from 'src/app/dto/models/deckMetaData';
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

    getAllMetaData(): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(this.deckEndpoint + '/allMetaData', {
            headers: headers
        });
    }

    getSingleDeck(id: number): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(`${this.deckEndpoint}/${id}`, {
            headers: headers
        });
    }

    getDeckMetaData(id: number): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        return this.http.get(`${this.deckEndpoint}/metaData/${id}`, {
            headers: headers
        });
    }

    getCardImage(serial: string): string {
        return `${this.cardImgEndpointTEMP}/${serial}.jpg`;
    }

    getDeckCoverImage(serial?: string): string {
        return `${this.cardImgEndpointTEMP}/PLACE_HOLDER.jpg`;
    }

    incrementDeckViewCount(id: number): void {
        const headers = { 'content-type': 'application/json' };
        this.http.put<number>(`${this.deckEndpoint}/incrementDeckViewCount/${id}`, {
            headers: headers
        }).subscribe();
    }
}
