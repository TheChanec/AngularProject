import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})

export class FormularioComponent {

  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),

  });

  constructor() { }

  onSubmit() {
    console.log(this.exampleForm.controls.firstName.value);
  }

}
