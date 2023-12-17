import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { GraphicComponent } from './graphic/graphic.component';
import { MaterialAngularModule } from '../material-angular.module';



@NgModule({
  declarations: [
    DashboardComponent,
    GraphicComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialAngularModule
  ]
})
export class DashboardModule { }
