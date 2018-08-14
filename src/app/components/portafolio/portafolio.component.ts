import { Component } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent  {
  public productos: Producto[] = [];
  constructor(private router: Router) {
    this.productos = [
      { id : '1' , name : 'el uno' },
      { id : '2' , name : 'el dos' },
      { id : '3' , name : 'el tres' },
      { id : '4' , name : 'el cuatro' },
      { id : '5' , name : 'el cinco' },
      { id : '6' , name : 'el seis' },
      { id : '7' , name : 'el siete' }];
   }

getProducto(id: string) {
    const productoUrl = `/producto/${id}`;
    this.router.navigate([productoUrl]);
}

}
