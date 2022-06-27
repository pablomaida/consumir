import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlognewsModule } from './blognews/blognews.module';//importa el modulo que contiene a los componentes



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BlognewsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
