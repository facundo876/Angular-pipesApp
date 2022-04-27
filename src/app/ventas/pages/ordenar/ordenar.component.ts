import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  orden:string = '';
  isMayus:boolean = false;

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    }
  ];

  constructor() { }

  enMayusculas(){
    this.isMayus = !this.isMayus;
  }

  cambiarOrden(orden:string){

    this.orden = orden;
  }
}
