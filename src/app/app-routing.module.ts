import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './views/principal/principal.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';

const routes: Routes = [

  { path: '', component: PrincipalComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
