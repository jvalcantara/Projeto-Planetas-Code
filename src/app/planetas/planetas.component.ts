import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planeta';

import { PlanetaService } from '../planeta.service'


@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planetas: Planeta[]; 

  constructor(private planetaService: PlanetaService) { }

  ngOnInit() {
    this.getPlanetas();
  }

  getPlanetas(): void {
    this.planetaService.getPlanetas()
    .subscribe(planetas => this.planetas = planetas);
  }

  add(nome: string, life: boolean, data: Date): void {
    nome = nome.trim();
    if (!nome ) { return; }
    this.planetaService.addPlaneta({ nome,life,data } as Planeta)
      .subscribe(planeta => {
        this.planetas.push(planeta);
      });
    
  }

  delete(planeta: Planeta): void {
    this.planetas = this.planetas.filter(h => h !== planeta);
    this.planetaService.deletePlaneta(planeta).subscribe();
  }

}