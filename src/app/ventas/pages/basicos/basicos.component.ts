import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreUpper:string = "FACUNDO"
  nombreLower:string = "facundo"
  nombreCompleto:string = "facUndO aRCE"

  fecha:Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
