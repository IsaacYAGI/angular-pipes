import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan América';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;

  idioma: string = 'es';

  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() =>{
      resolve("Llego la data");
    } ,3500)
  });

  fecha: Date = new Date();

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: '1st',
      casa: 20
    }
  };

  cambiarIdioma(idioma: | 'en' | 'es' | 'fr' ): void{
    this.idioma = idioma;
  }
}
