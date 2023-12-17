import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTicketsComponent } from './consultar-tickets.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarTicketsComponent,
    data: {
      title: 'Consulta de Tickets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarTicketsRoutingModule { }
