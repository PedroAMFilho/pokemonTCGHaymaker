import { Injectable } from '@angular/core';
import { Observable, of, from} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cards } from './card';
import { Card } from './card';
import { CardContent } from './card';
import { Cardmock } from './mock-cards';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'https://api.pokemontcg.io/v1/cards';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCards(): Observable<Cards['cards']> {
    return this.http.get<Cards['cards']>(this.cardsUrl).pipe(
      map(data => data['cards']),
      tap(_ => this.log('fetched cards')),
      catchError(this.handleError<Cards['cards']>('getCards', []))
    );
  }

  getCard(id: string): Observable<CardContent>{
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<CardContent>(url).pipe(
      map(data => data['card']),
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }
  
  searchCards(term: string): Observable<Cards['cards']> {
    if (!term.trim()) {
      // if not search term, return empty card array.
      return of([]);
    }
    return this.http.get<Cards['cards']>(`${this.cardsUrl}/?name=${term}`).pipe(
      map(data => data['cards']),
      tap(x => x.length ?
         this.log(`found cards matching "${term}"`) :
         this.log(`no cards matching "${term}"`)),
      catchError(this.handleError<Cards['cards']>('searchCards', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CardService: ${message}`);
  }
}
