import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent  {

  constructor() { }
  model: any = {};

  guardar() {
    console.log('prueba');
  }
}
