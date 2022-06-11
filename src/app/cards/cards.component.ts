import { Component, OnInit } from '@angular/core';
import{NoticiasService} from '../services/noticias.service';//importamos el servicio creado

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
   //dentro del construct crea un metodo _service que contiene al servicio paara consumir y traer la api
  constructor(private _service:NoticiasService) { }
  //array que contiene el resultado de la api
  tecno:any=[];
  //array con resultados limitados
  

  ngOnInit(): void {

    //llamamos y concatenamos metodos service-navegation con suscribite 
    // y muestra en consola el array de la api
    this._service.tecno().subscribe((result)=>{
      console.log(result);
      this.tecno=result.articles;//mete dentro del array y metra en la pagina
    })
  }

}
