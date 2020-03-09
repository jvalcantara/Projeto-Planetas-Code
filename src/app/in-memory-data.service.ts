import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Planeta } from './planeta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const planetas = [
      { id: 10, nome: 'Terra', life: true, data: new Date('2020') },
      { id: 11, nome: 'Plutao', life: false, data: new Date('5001') },
      { id: 12, nome: 'Mercurio', life: false, data: new Date('5002') },
      { id: 13, nome: 'Venus', life: false, data: new Date('5003') },
      { id: 14, nome: 'Marte', life: false, data: new Date('5004') },
    ];
    return {planetas};
  }

 
  genId(planetas: Planeta[]): number {
    return planetas.length > 0 ? Math.max(...planetas.map(planeta => planeta.id)) + 1 : 11;
  }
}