import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado',
})
export class FiltradoPipe implements PipeTransform {
  transform(value: any, args: any): any {
    //contendra los resultados de los posts que desea mostrarse
    const resultPosts = [];
    //EL VALUE ENTRA DENTRO DEL NGFOR Y RECOGE EL RESULTADO DE TECNO Y LIMITA CON
    //Y COLOCA EN LA constante post y agrega con push en el array nuevo resultPost
    for (const post of value.slice(0, 4)) {
      resultPosts.push(post);
    }

    //deveria devolver los 5 posts pero no traer ;-;
    console.log(resultPosts);
    return resultPosts;
  }
}
