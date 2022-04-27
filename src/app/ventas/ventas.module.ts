import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
