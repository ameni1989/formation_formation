import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchP'
})
export class SearchPPipe implements PipeTransform {

//explication de fonction
// la méthode transform prend deux arguments : value et args. value représente le tableau d'objets (items dans le template) et args représente l'argument de recherche (search dans le template).
  transform(value: any,args: any): any {
    if (!value) return null;
    if (!args) return value;
    args=args.toLowerCase();
    return value.filter((item:any)=>{
     return JSON.stringify(item).toLowerCase().includes(args);

    })
 }

}
