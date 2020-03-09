import { Component, OnInit } from '@angular/core';
import { Planeta } from '../planeta';
import { PlanetaService } from '../planeta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planetas: Planeta[] = [];

  constructor(private planetaService: PlanetaService) { }

  ngOnInit(): void {
    this.getPlanetas();
  }

  getPlanetas(): void {
    this.planetaService.getPlanetas()
      .subscribe(planetas => this.planetas = planetas.slice(0, 4));
  }
}
