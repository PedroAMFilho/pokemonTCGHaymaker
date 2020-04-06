import { Injectable } from '@angular/core';
import { Observable, of, from} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CardModel } from './card';
import { Cardmock } from './mock-cards';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'https://api.pokemontcg.io/v1/cards';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCards(): Observable<CardModel['cards']> {
    return this.http.get<CardModel['cards']>(this.cardsUrl).pipe(
      tap(_ => this.log('fetched cards')),
      catchError(this.handleError<CardModel['cards']>('getCards', []))
    );
  }

  getCard(id: string): Observable<CardModel>{
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<CardModel>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<CardModel>(`getCard id=${id}`))
    );
    //this.messageService.add(`CardService: fetched card id=${id}`);
    //return of (Cardmock.find(card => cards.id === id));
  }
  
  searchCards(term: string): Observable<CardModel[]> {
    if (!term.trim()) {
      // if not search term, return empty card array.
      return of([]);
    }
    return this.http.get<CardModel[]>(`${this.cardsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<CardModel[]>('searchCards', []))
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
