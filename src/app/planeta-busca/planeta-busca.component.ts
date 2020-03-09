import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Planeta } from '../planeta';
import { PlanetaService } from '../planeta.service';

@Component({
  selector: 'app-planeta-busca',
  templateUrl: './planeta-busca.component.html',
  styleUrls: [ './planeta-busca.component.css' ]
})
export class PlanetaBuscaComponent implements OnInit {
  planetas$: Observable<Planeta[]>;
  private searchTerms = new Subject<string>();
 
  search(term: string): void {
    this.searchTerms.next(term);
  }
    
  constructor(private planetaService: PlanetaService) {}

  ngOnInit(): void {

    this.planetas$ = this.searchTerms.pipe(
      
      debounceTime(300),

      distinctUntilChanged(),

    
      switchMap((term: string) => this.planetaService.planetaBusca(term)),
    );
  }
}