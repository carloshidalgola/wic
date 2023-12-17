import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndGestionNovedadesComponent } from './end-gestion-otras-novedades/end-gestion-novedades.component';
import { GestionarNovedadesComponent } from './gestionar-novedades.component';
import { RegisterComponent } from './register/register.component';
import { EndManageNoveltiesComponent } from './end-gestionar-novedades/end-manage-novelties.component';
import { StepsManageNoveltiesComponent } from './steps-gestionar-novedades/steps-manage-novelties.component';

const routes: Routes = [
  {
    path: '',
    component: GestionarNovedadesComponent,
    data: {
      title: 'Gestionar Novedades',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Registro de Novedades',
    },
  },
  {
    path: 'end-novelty/:numberticket/:isNotify',
    component: EndGestionNovedadesComponent,
    data: {
      title: 'Registro de Novedades',
    },
  },
  {
    path: 'steps-novedades',
    component: StepsManageNoveltiesComponent,
    data: {
      title: 'Gestionar Novedades',
    },
  },
  {
    path: 'end-novedades',
    component: EndManageNoveltiesComponent,
    data: {
      title: 'Gestionar Novedades',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarNovedadesRoutingModule { }
