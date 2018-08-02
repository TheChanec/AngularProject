import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandlerService } from '../shared/services/error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  netinfo: any = {};
  equipo: any[] = [];
  public errorMessage: string;

  constructor(public http: Http, private errorHandler: ErrorHandlerService) {
    this.carga_info();
    this.carga_sobre_nosotros();
    this.carga_net_info();
  }

  public carga_info() {
    this.http.get('assets/data/info.json').subscribe(data => {
      this.info = data.json();
    });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://rakoona-aca32.firebaseio.com/Equipo.json').subscribe(data => {
      this.equipo = data.json();
    });
  }

  public carga_net_info() {
    this.http.get('http://localhost:50112/api/values')
      .subscribe(data => {
        this.netinfo = data.json();
        console.log(this.netinfo);
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
  }
}
