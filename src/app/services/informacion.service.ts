import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  equipo: any[] = [];


  constructor(public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
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
}
