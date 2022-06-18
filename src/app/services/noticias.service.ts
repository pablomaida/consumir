import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  //injectamos en el constructor httpclient para utilzar la api
  constructor(private http:HttpClient) { }
    //creamos las variable que contiene a la api
    noticiasApiUrl="https://newsapi.org/v2/top-headlines?country=ar&apiKey=64436a50488d4dd9a099d8e4b8073ae4"
  
    //url de api que contiene tecnologia se le agrego country=de&category=technology para pais y la categoria
    tecnoApiUrl="https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=64436a50488d4dd9a099d8e4b8073ae4"

    espectaApiUrl="https://newsapi.org/v2/top-headlines?country=mx&category=entertainment&apiKey=64436a50488d4dd9a099d8e4b8073ae4"

    negociosApiUrl="https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=64436a50488d4dd9a099d8e4b8073ae4"

    sportApiUrl="https://newsapi.org/v2/top-headlines?country=mx&category=sports&apiKey=64436a50488d4dd9a099d8e4b8073ae4"

    arteApiUrl="https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=64436a50488d4dd9a099d8e4b8073ae4"
    
    sliderapiurl="https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=64436a50488d4dd9a099d8e4b8073ae4"
      
    //metodos tecnologia y espectaculo que devuleve las noticias de la api
      tecno():Observable<any>{
        return this.http.get(this.tecnoApiUrl)
      }

      especta():Observable<any>{
        return this.http.get(this.espectaApiUrl)
      }

      negocios():Observable<any>{
        return this.http.get(this.negociosApiUrl)
      }

      sport():Observable<any>{
        return this.http.get(this.sportApiUrl)
      }

      salud():Observable<any>{
        return this.http.get(this.arteApiUrl)
      }
      slider():Observable<any>{
        return this.http.get(this.sliderapiurl)
      } 

} 

