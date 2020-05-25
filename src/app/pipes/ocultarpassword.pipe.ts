import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarpassword'
})
export class OcultarpasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    if (activar)//Si hay que ocultarla
      return value.split('').map(element => "*").join('');//Separamos todos los caracteres, los mapeamos con * y los unimos nuevamente
    return value;//Sino retorna el valor como llego
  }

}
