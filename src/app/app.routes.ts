import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PortafolioComponent,
  ProductoComponent,
  AboutComponent,
  LoginComponent,
  FormularioComponent,
  InternalServerComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '500', component: InternalServerComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
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
