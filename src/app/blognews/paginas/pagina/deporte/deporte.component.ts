import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  constructor(private _service:NoticiasService) { }
  sport:any=[];

  filtropost=this.sport;

  ngOnInit(): void {
    this._service.sport().subscribe((result)=>{
      console.log(result);
      this.sport=result.articles;//mete dentro del array y muestra en la pagina
    })
  }

}
