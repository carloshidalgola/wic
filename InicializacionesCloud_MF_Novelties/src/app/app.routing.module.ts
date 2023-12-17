import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  {path: "" , pathMatch: 'full', redirectTo: 'login'},
  {path: "login" , component:LoginComponent},
  {
    path: '',
    loadChildren: () =>
      import('./views/pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [AuthGuard],
  },
  {path : "login/olvidoClave" ,  component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
