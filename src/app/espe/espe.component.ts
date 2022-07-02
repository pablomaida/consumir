import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-espe',
  templateUrl: './espe.component.html',
  styleUrls: ['./espe.component.css']
})
export class EspeComponent implements OnInit {
/*se vuelve a inyecta en el constructor*/
  constructor(private _service:NoticiasService) { }
  especta:any=[];/*crea de nuevo el array que contendra al resultado de la api*/

  filtropost=this.especta
  
  ngOnInit(): void {
    //con subscribe obtiene el resultado de la api
    this._service.especta().subscribe((result)=>{
      console.log(result);
      this.especta=result.articles;//mete dentro del array y metra en la pagina
    })
  }

}
