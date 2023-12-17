import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneracionReportesRoutingModule } from './generacion-reportes-routing.module';
import { GeneracionReportesComponent } from './generacion-reportes.component';
import { MaterialAngularModule } from '../material-angular.module';
import { CommonComponentsModule } from '../../common-components/common-components.module';



@NgModule({
  declarations: [
    GeneracionReportesComponent
  ],
  imports: [
    CommonModule,
    GeneracionReportesRoutingModule,
    MaterialAngularModule,
    CommonComponentsModule,
  ]
})
export class GeneracionReportesModule { }
