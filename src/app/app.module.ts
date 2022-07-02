import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlognewsModule } from './blognews/blognews.module';//importa el modulo que contiene a los componentes
//importa el componentees externos u el filter
import { EspeComponent } from './espe/espe.component';
import { DeporteComponent } from './deporte/deporte.component';
import { FaComponent } from './fa/fa.component';
import { ArtesComponent } from './artes/artes.component';
import { FiltradoPipe } from './filtrado.pipe';

import { TecnoComponent } from './tecno/tecno.component';

@NgModule({
  /*declaramos los componentes externos pa que llamen*/
  declarations: [AppComponent,FiltradoPipe,DeporteComponent,EspeComponent,FaComponent,ArtesComponent, TecnoComponent],
  imports: [BrowserModule, BlognewsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
