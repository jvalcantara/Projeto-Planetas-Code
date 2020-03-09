import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlanetasComponent }      from './planetas/planetas.component';
import { PlanetaDetalheComponent }  from './planeta-detalhe/planeta-detalhe.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PlanetaDetalheComponent },
  { path: 'planetas', component: PlanetasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
