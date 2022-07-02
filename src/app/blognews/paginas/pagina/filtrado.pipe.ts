import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado',
})
export class FiltradoPipe implements PipeTransform {
  transform(value: any, args: any): any {
    //contendra los resultados de los posts que desea mostrarse
    const resultPosts = [];
    //EL VALUE ENTRA DENTRO DEL NGFOR Y RECOGE EL RESULTADO DE TECNO Y recorre indice con metodo slice
    //Y COLOCA EN LA constante post y agrega con push en el array nuevo resultPosts
    for (const post of value.slice(0, 8)) {
      resultPosts.push(post);
    }

    //devuelve con return los 5 posts 
    console.log(resultPosts);
    return resultPosts;
  }
}
