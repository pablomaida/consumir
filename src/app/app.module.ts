import { RouterModule, Routes } from '@angular/router';//importamos pa el routing

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import{HttpClientModule}from '@angular/common/http';
import{NoticiasService}from './services/noticias.service';//importamos el servicios que creamos
//importamos los componentes para los routinglinks
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { EspeComponent } from './espe/espe.component';
import { FaComponent } from './fa/fa.component';//componente negocios cambie XD
import { DeporteComponent } from './deporte/deporte.component';
import { ArtesComponent } from './artes/artes.component';//componenete salud
import { FiltradoPipe } from './filtrado.pipe';





//constante routes que tiene a las rutas(routinglinks) y los componentes que van a cunsumir
const routes: Routes = [
  //los routinglinks con sus componentes respectivos
  { path: 'tecnologia', component: CardsComponent },
  { path: 'espectaculo', component: EspeComponent },
  { path: 'negocios', component: FaComponent },
  { path: 'deportes', component: DeporteComponent },
  { path: 'salud', component: ArtesComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    EspeComponent,
    FaComponent,
    DeporteComponent,
    ArtesComponent,
    NavComponent,
    FiltradoPipe 
  ],
  //dentro del import metemos el metodo httpclientmodule
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(routes)  //importamos tambien esto para el routing
           
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
