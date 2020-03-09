import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Planeta } from './planeta';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PlanetaService {

  private planetasUrl = 'api/planetas';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getPlanetas (): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.planetasUrl)
      .pipe(
        tap(_ => this.log('planetas buscados')),
        catchError(this.handleError<Planeta[]>('getPlanetas', []))
      );
  }


  getPlanetaNo404<Data>(id: number): Observable<Planeta> {
    const url = `${this.planetasUrl}/?id=${id}`;
    return this.http.get<Planeta[]>(url)
      .pipe(
        map(planetas => planetas[0]), 
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} planeta id=${id}`);
        }),
        catchError(this.handleError<Planeta>(`getPlaneta id=${id}`))
      );
  }

 
  getPlaneta(id: number): Observable<Planeta> {
    const url = `${this.planetasUrl}/${id}`;
    return this.http.get<Planeta>(url).pipe(
      tap(_ => this.log(`planeta selecionado id=${id}`)),
      catchError(this.handleError<Planeta>(`getPlaneta id=${id}`))
    );
  }

  
  planetaBusca(term: string): Observable<Planeta[]> {
    if (!term.trim()) {
      
      return of([]);
    }
    return this.http.get<Planeta[]>(`${this.planetasUrl}/?nome=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found planetas matching "${term}"`) :
         this.log(`no planetas matching "${term}"`)),
      catchError(this.handleError<Planeta[]>('searchPlanetas', []))
    );
  }



  
  addPlaneta (planeta: Planeta): Observable<Planeta> {
    return this.http.post<Planeta>(this.planetasUrl, planeta, this.httpOptions).pipe(
      tap((newPlaneta: Planeta) => this.log(`added planeta w/ id=${newPlaneta.id}`)),
      catchError(this.handleError<Planeta>('addPlaneta'))
    );
  }


  deletePlaneta (planeta: Planeta | number): Observable<Planeta> {
    const id = typeof planeta === 'number' ? planeta : planeta.id;
    const url = `${this.planetasUrl}/${id}`;

    return this.http.delete<Planeta>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted planeta id=${id}`)),
      catchError(this.handleError<Planeta>('deletePlaneta'))
    );
  }


  updatePlaneta (planeta: Planeta): Observable<any> {
    return this.http.put(this.planetasUrl, planeta, this.httpOptions).pipe(
      tap(_ => this.log(`updated planeta id=${planeta.id}`)),
      catchError(this.handleError<any>('updatePlaneta'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
    this.messageService.add(`PlanetaService: ${message}`);
  }
}