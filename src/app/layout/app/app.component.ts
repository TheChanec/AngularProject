import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  authentication: boolean;

  constructor(public _is: InformacionService) {
    this.authentication = true;
  }
}
