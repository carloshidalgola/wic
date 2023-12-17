import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneracionReportesComponent } from './generacion-reportes.component';

const routes: Routes = [
  {
    path: '',
    component: GeneracionReportesComponent,
    data: {
      title: 'Generación de Reportes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneracionReportesRoutingModule { }
