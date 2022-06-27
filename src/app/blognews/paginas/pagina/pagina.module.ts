import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { FiltradoPipe } from './filtrado.pipe';
import { NoticiasService } from './services/noticias.service';
import { EspeComponent } from './espe/espe.component';
import { FaComponent } from './fa/fa.component';
import { DeporteComponent } from './deporte/deporte.component';
import { ArtesComponent } from './artes/artes.component';

@NgModule({
  declarations: [
    CardsComponent,
    EspeComponent,
    FaComponent,
    DeporteComponent,
    ArtesComponent,
    FiltradoPipe,
  ],
  imports: [CommonModule],

  exports: [
    CardsComponent,
    EspeComponent,
    FaComponent,
    DeporteComponent,
    ArtesComponent,
  ],

  providers: [NoticiasService],
})
export class PaginaModule {}
