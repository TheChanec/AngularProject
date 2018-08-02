import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authentication: boolean;

  constructor(public _is: InformacionService) {
    this.authentication = true;
  }
}
