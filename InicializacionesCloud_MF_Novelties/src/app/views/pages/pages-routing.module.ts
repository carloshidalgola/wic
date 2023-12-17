import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages.component';
import { DefaultPageComponent } from './miscellaneous/default-page/default-page.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DefaultPageComponent,
        data: {
          title: 'Home',
        },
      },
      {
        path: 'novelties',
        loadChildren: () =>
          import('./novelties/novelties.module')
            .then((m) => m.NovedadModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module')
            .then((m) => m.DashboardModule),
      },
      {
        path: 'gestionar-novedades',
        loadChildren: () =>
          import('./gestionar-novedades/gestionar-novedades.module')
            .then((m) => m.GestionarNovedadesModule),
      },
      {
        path: 'generacion-reportes',
        loadChildren: () =>
          import('./generacion-reportes/generacion-reportes.module')
            .then((m) => m.GeneracionReportesModule),
      },
      {
        path: 'consultar-tickets',
        loadChildren: () =>
          import('./consultar-tickets/consultar-tickets.module')
            .then((m) => m.ConsultarTicketsModule),
      },
      {
        path: 'gestionar-otras-novedades',
        loadChildren: () =>
          import('./gestionar-otras-novedades/gestionar-otras-novedades.module')
            .then((m) => m.GestionarOtrasNovedadesModule),
      },
      {
        path: 'bulk-load',
        loadChildren: () =>
          import('./bulk-load/bulk-load.module')
            .then((m) => m.BulkLoadModule),
      },
      {
        path: 'gestionar-otras-novedades/:codeCommerce',
        loadChildren: () =>
          import('./gestionar-otras-novedades/gestionar-otras-novedades.module')
            .then((m) => m.GestionarOtrasNovedadesModule),
      },
      {
        path: '**',
        data: {
          title: '404 No encontrado👻 - Redeban',
        },
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
  menu = [];

  constructor() { }
}
