import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tecno',
  templateUrl: './tecno.component.html',
  styleUrls: ['./tecno.component.css']
})
export class TecnoComponent implements OnInit {

  constructor(private _service:NoticiasService) { }
  tecno:any=[];

  filtropost=this.tecno;

  ngOnInit(): void {
    this._service.tecno().subscribe((result)=>{
      console.log(result);
      this.tecno=result.articles;//mete dentro del array y muestra en la pagina
    })
  }

}
