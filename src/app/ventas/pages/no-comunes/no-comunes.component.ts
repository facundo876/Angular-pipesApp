import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre:string = 'facundo'
  genero:string = 'masculino'

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
   }

   clientes:string[] = ['Maria', 'Facundo', 'Brenda']

   clientesMap = {
     '=0': 'no tenemos ningun cliente esperando.',
     '=1': 'tenemos un cliente esperando.',
     '=2': 'tenemos 2 clientes esperando.',
     'other': 'tenemos # clientes esperando.',
     
   }

   cambiarNombre(){
     this.nombre = 'maria';
     this.genero = 'femenino'
   }

   cambiarClientes(){
      this.clientes.push( '' )
   }
}
