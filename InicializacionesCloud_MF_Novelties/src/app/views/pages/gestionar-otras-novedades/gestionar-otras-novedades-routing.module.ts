import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { EndGestionOtrasNovedadesComponent } from './end-gestion-otras-novedades/end-gestion-otras-novedades.component';
import { FormGestionOtrasNovedadesComponent } from './form-gestion-otras-novedades/form-gestion-otras-novedades.component';
import { GestionarOtrasNovedadesComponent } from './gestionar-otras-novedades.component';


const routes: Routes = [
  {
    path: '',
    component: GestionarOtrasNovedadesComponent,
    data: {
      title: 'Gestionar Otras Novedades',
    },
  },
  {
    path: 'config-novelties',
    component: FormGestionOtrasNovedadesComponent,
    data: {
      title: 'Configurar Novedad',
    },
  },
  {
    path: 'config-novelties/:id',
    component: FormGestionOtrasNovedadesComponent,
    data: {
      title: 'Configurar Novedad',
    },
  },
  {
    path: 'end-other-novelty/:noveltyId/:numberticket/:isNotify',
    component: EndGestionOtrasNovedadesComponent,
    data: {
      title: 'Fin de Creación de Otras Novedades',
    },
  },
  {
    path: 'configurar-novedad/:codeCommerce',
    component: FormGestionOtrasNovedadesComponent,
    data: {
      title: 'Configurar Novedad',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarOtrasNovedadesRoutingModule { }
