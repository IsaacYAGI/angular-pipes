import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    
    value = value.toLowerCase();
    let nombres = value.split(' ');
    
    if (todas){
       return nombres
        .map((nombre) => nombre.charAt(0).toUpperCase() + nombre.substr(1)).join(' ');
    }
    
    nombres[0] = nombres[0].charAt(0).toUpperCase() + nombres[0].substr(1);
    return nombres.join(' ');
  }

}
