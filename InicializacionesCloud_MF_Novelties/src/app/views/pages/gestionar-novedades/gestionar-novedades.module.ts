import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarNovedadesRoutingModule } from './gestionar-novedades-routing.module';
import { GestionarNovedadesComponent } from './gestionar-novedades.component';
import { MaterialAngularModule } from '../material-angular.module';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { EndManageNoveltiesComponent } from './end-gestionar-novedades/end-manage-novelties.component';
import { StepsManageNoveltiesComponent } from './steps-gestionar-novedades/steps-manage-novelties.component';
import { SearchFirstStepComponent } from './steps-gestionar-novedades/first-step/search-first-step.component';
import { CommerceInformationComponent } from './steps-gestionar-novedades/first-step/commerce-information/commerce-information.component';
import { TerminalConfigurationComponent } from './steps-gestionar-novedades/first-step/terminal-configuration/terminal-configuration.component';
import { TerminalInformationComponent } from './steps-gestionar-novedades/first-step/terminal-information/terminal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { EndGestionNovedadesComponent } from './end-gestion-otras-novedades/end-gestion-novedades.component';
import { EndDialogComponent } from './register/end-dialog/end-dialog.component';

@NgModule({
  declarations: [
    GestionarNovedadesComponent,
    EndManageNoveltiesComponent,
    StepsManageNoveltiesComponent,
    SearchFirstStepComponent,
    TerminalConfigurationComponent,
    CommerceInformationComponent,
    TerminalInformationComponent,
    RegisterComponent,
    EndGestionNovedadesComponent,
    EndDialogComponent
  ],
  imports: [
    CommonModule,
    GestionarNovedadesRoutingModule,
    MaterialAngularModule,
    CommonComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    FlexLayoutModule,
  ]
})
export class GestionarNovedadesModule { }
