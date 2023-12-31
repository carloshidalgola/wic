import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { NoveltiesRoutingModule } from './novelties-routing.module';

import { NoveltiesComponent } from './novelties.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { UploadImageComponent, DialogContentCameraComponent} from './upload-image/upload-image.component';
import { SearchComponent } from './search/search.component';
import { PendingsComponent } from './pendings/pendings.component';
import { SearchFirstStepComponent } from './search-first-step/search-first-step.component';
import { TerminalConfigurationComponent } from './search-first-step/terminal-configuration/terminal-configuration.component';
import { TerminalInformationComponent } from './search-first-step/terminal-information/terminal-information.component';
import { CommerceInformationComponent } from './search-first-step/commerce-information/commerce-information.component';
import {WebcamModule} from 'ngx-webcam';
import {CameraComponent} from './camera/camera.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserverService } from 'src/app/service/breakpoint-observer.service';
import { DomainModule } from 'src/app/domain/domain.module';
import { EndDialogComponent } from './register/end-dialog/end-dialog.component';
import { HeaderComponent } from './header/header.component';
import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { ConsultTicketsComponent } from './consult-tickets/consult-tickets.component';

@NgModule({
  declarations: [
    NoveltiesComponent,
    RegisterComponent,
    UploadImageComponent,
    SearchComponent,
    PendingsComponent,
    SearchFirstStepComponent,
    TerminalConfigurationComponent,
    TerminalInformationComponent,
    CommerceInformationComponent,
    DialogContentCameraComponent,
    CameraComponent,
    EndDialogComponent,
    HeaderComponent,
    SearchTicketComponent,
    ConsultTicketsComponent
  ],
  imports: [
    FormsModule,
    WebcamModule,
    FlexLayoutModule,
    CommonModule,
    NoveltiesRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatStepperModule,
    CdkAccordionModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    NgxDropzoneModule,
    HttpClientModule,
  ],
  bootstrap: [
    UploadImageComponent,
   ],
   providers:    [BreakpointObserverService, PendingsService]
})
export class NovedadModule { }
