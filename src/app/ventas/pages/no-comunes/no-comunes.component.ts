import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

   clientes:string[] = ['Maria', 'Facundo', 'Brenda','Hernan', 'Jose']

   clientesMap = {
     '=0': 'no tenemos ningun cliente esperando.',
     '=1': 'tenemos un cliente esperando.',
     '=2': 'tenemos 2 clientes esperando.',
     'other': 'tenemos # clientes esperando.',
     
   }

   persona = {
     nombre: 'facundo',
     edad: 22,
     pais: 'argentina'
   }

   heroes = [
     {
       nombre:'superman',
       vuela: true
     },
     {
      nombre:'spiderman',
      vuela: false
    },
    {
      nombre:'acuaman',
      vuela: false
    }
   ]

   miObservable = interval(1000);

   miPromesa = new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve( 'Tenemos data de promesa.' )
      }, 3000);
   });

   cambiarNombre(){
     this.nombre = 'maria';
     this.genero = 'femenino'
   }

   cambiarClientes(){
      this.clientes.pop()
   }

   
}
