import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.css']
})
export class FaComponent implements OnInit {

 /*se vuelve a inyecta en el constructor*/
 constructor(private _service:NoticiasService) { }
 negocios:any=[];/*crea de nuevo el array que contendra al resultado de la api*/

 filtropost=this.negocios
 
 ngOnInit(): void {
   //con subscribe obtiene el resultado de la api
   this._service.negocios().subscribe((result)=>{
     console.log(result);
     this.negocios=result.articles;//mete dentro del array y metra en la pagina
   })
 }

}
