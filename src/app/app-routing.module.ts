import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  AboutComponent
} from './components/index.paginas';

const routes: Routes = [
  {
    path: '',
     component: PortafolioComponent
  },
  {
    path: 'producto',
     component: ProductoComponent
  },
  {
    path: 'about',
     component: AboutComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
