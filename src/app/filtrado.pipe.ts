import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado'
})
export class FiltradoPipe implements PipeTransform {

  transform(value: any,args:any): any {
    const resultPosts=[];//contendra los resultados de los posts que desea mostrarse
    for(const post of value){//el value equivale los posts
        if(post.articles.indexOf(args <=4)){
          resultPosts.push(post)//agrega a la constante post y concatena en el array con metodo push
        }
    }
    return resultPosts; //deveria devolver los 5 posts pero no traer ;-;
  }

}
