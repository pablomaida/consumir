import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.css']
})
export class ArtesComponent implements OnInit {

  salud:any=[];

  filtropost=this.salud;

  constructor(private _service:NoticiasService) { }

  ngOnInit(): void {
    this._service.salud().subscribe((result)=>{
      console.log(result);
      this.salud=result.articles;//mete dentro del array y muestra en la pagina
    })
  }

}
