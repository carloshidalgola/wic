import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ConsultarTicketsComponent } from './consultar-tickets.component';

//Modules
import { MaterialAngularModule } from '../material-angular.module';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { ConsultarTicketsRoutingModule } from './consultar-tickets-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      ConsultarTicketsComponent,
    ],
    imports: [
      CommonModule,
      ConsultarTicketsRoutingModule,
      MaterialAngularModule,
      CommonComponentsModule,
      FormsModule,
      ReactiveFormsModule
    ],
})
export class ConsultarTicketsModule { }
