import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarOtrasNovedadesRoutingModule } from './gestionar-otras-novedades-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialAngularModule } from '../material-angular.module';

import { GestionarOtrasNovedadesComponent } from './gestionar-otras-novedades.component';
import { EndGestionOtrasNovedadesComponent } from './end-gestion-otras-novedades/end-gestion-otras-novedades.component';
import { FormGestionOtrasNovedadesComponent } from './form-gestion-otras-novedades/form-gestion-otras-novedades.component';

import { SearchGestionarOtrasNovedadesComponent } from './search-gestionar-otras-novedades/search-gestionar-otras-novedades.component';
import { InfoComerceComponent } from './form-gestion-otras-novedades/info-comerce/info-comerce.component';
import { PlatesFieldComponent } from './form-gestion-otras-novedades/plates-field/plates-field.component';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { ConfigNovCausalComponent } from './form-gestion-otras-novedades/config-nov-causal/gestionar-otras-novedades.component';
import { PendingNoveltiesComponent } from './pending-novelties/pending-novelties.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    GestionarOtrasNovedadesComponent,
    EndGestionOtrasNovedadesComponent,
    FormGestionOtrasNovedadesComponent,
    InfoComerceComponent,
    PlatesFieldComponent,
    SearchGestionarOtrasNovedadesComponent,
    ConfigNovCausalComponent,
    PendingNoveltiesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GestionarOtrasNovedadesRoutingModule,
    MaterialAngularModule,
    CommonComponentsModule,
    WebcamModule,
    FlexLayoutModule,
  ],
  //   PlacaComponent,
})
export class GestionarOtrasNovedadesModule { }
