import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Planeta }         from '../planeta';
import { PlanetaService }  from '../planeta.service';

@Component({
  selector: 'app-planeta-detalhe',
  templateUrl: './planeta-detalhe.component.html',
  styleUrls: [ './planeta-detalhe.component.css' ]
})
export class PlanetaDetalheComponent implements OnInit {
  @Input() planeta: Planeta;

  constructor(
    private route: ActivatedRoute,
    private planetaService: PlanetaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlaneta();
  }

  getPlaneta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetaService.getPlaneta(id)
      .subscribe(planeta => this.planeta = planeta);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.planetaService.updatePlaneta(this.planeta)
      .subscribe(() => this.goBack());
  }
}