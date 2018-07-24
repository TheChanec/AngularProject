import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  AboutComponent,
  LoginComponent
} from './components/index.paginas';

const routes: Routes = [
  {
    path: '',
     component: PortafolioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'producto/:id',
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
