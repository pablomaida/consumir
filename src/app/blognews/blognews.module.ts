import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';
import { Banner2Component } from './banner2/banner2.component';
import { MisionComponent } from './mision/mision.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaModule } from './paginas/pagina/pagina.module';
import { CardsComponent } from './paginas/pagina/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';//import de httclient
import { RouterModule, Routes } from '@angular/router';//importamos pa el routing
//importacion de los componentes del nav 
import { EspeComponent } from './paginas/pagina/espe/espe.component';
import { FaComponent } from './paginas/pagina/fa/fa.component';
import { DeporteComponent } from './paginas/pagina/deporte/deporte.component';
import { ArtesComponent } from './paginas/pagina/artes/artes.component';
import { RouterComponent } from './router/router.component';

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
    NavigationComponent,
    BannerComponent,
    NewsComponent,
    Banner2Component,
    MisionComponent,
    FooterComponent,
    RouterComponent,
  ],
  imports: [
    CommonModule,
    PaginaModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],

  exports: [
    NavigationComponent,
    BannerComponent,
    NewsComponent,
    Banner2Component,
    MisionComponent,
    FooterComponent,
    CardsComponent,
    RouterComponent,
  ], //exportamos pa que pueda llama en el index general
})
export class BlognewsModule {}
