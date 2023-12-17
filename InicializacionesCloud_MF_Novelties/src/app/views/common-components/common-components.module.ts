import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { DialogComponent } from './dialog/dialog.component';
import { NoResultsComponent } from './no-results/no-results.component';

//Modules
import { MaterialAngularModule } from '../pages/material-angular.module';
import { RetomarComponent } from './retomar/retomar.component';

import { DialogContentCameraComponentCommon, UploadImageComponentCommon } from './upload-image/upload-image.component';
import { BreakpointObserverService } from 'src/app/service/breakpoint-observer.service';
import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { CameraCommonComponent } from './camera/camera.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DialogComponent,
    NoResultsComponent,
    RetomarComponent,
    UploadImageComponentCommon,
    DialogContentCameraComponentCommon,
    CameraCommonComponent,
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    NgxDropzoneModule,
    FlexLayoutModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [BreakpointObserverService, PendingsService],
  exports: [
    DialogComponent,
    NoResultsComponent,
    RetomarComponent,
    UploadImageComponentCommon,
    DialogContentCameraComponentCommon,
    CameraCommonComponent,
  ]
})
export class CommonComponentsModule { }
