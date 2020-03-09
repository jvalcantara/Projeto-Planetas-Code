import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlanetaDetalheComponent }  from './planeta-detalhe/planeta-detalhe.component';
import { PlanetasComponent }      from './planetas/planetas.component';
import { PlanetaBuscaComponent }  from './planeta-busca/planeta-busca.component';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetasComponent,
    PlanetaDetalheComponent,
    MessagesComponent,
    PlanetaBuscaComponent,
    
  ],
  
  bootstrap: [ AppComponent ]
})

export class AppModule { }