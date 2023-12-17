import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { BreakpointObserverService } from 'src/app/service/breakpoint-observer.service';
import { Utils } from 'src/app/util/utils';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title camera
 */

@Component({
  selector: 'novelties-web-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss',
]
})

export class CameraComponent implements OnInit  , AfterContentChecked{
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  @Input()
  public sizeNow!: number;

  @Input()
  public maxFileSize!: number;

  @Input()
  public cantImage!: Number;

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  public gridColumn = 0;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];
  condition: boolean = false;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public size$: Observable<string>;

  constructor(private _breakpointObserverService: BreakpointObserverService,private _snackBar: MatSnackBar,
    private changeDedectionRef: ChangeDetectorRef) {
    this.size$ = this._breakpointObserverService.size$;
  }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    console.log("size files:", this.sizeNow)
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    console.log("toggleWebcam:", this.sizeNow)

  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId

    this.nextWebcam.next(directionOrDeviceId);
    console.log("showNextWebcam:", this.sizeNow)

  }

  messageErrorSize() {

    var maximoFiles = "0MB";
    if (this.maxFileSize > 0) {
      maximoFiles = Utils.convertBytestoMegaBytes(this.maxFileSize);
    }
    this._snackBar.open(
      'Superó tamaño límite de ' + maximoFiles,
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });

  }
 
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    var typeImagen = "image/jpeg";
    var formato = '.jpeg';

    var newName = '2555' + "_" + Utils.numeroAFecha() + formato;

    var imagenBlob: Blob = Utils.b64toBlob(webcamImage.imageAsBase64, typeImagen, 512);
    const fileBlob = new File([imagenBlob], newName, {
      lastModified: 151154151554,
      type: imagenBlob.type,
    });
    console.log("bytes:",fileBlob)
     webcamImage.imageAsBase64
     if(fileBlob.size>this.maxFileSize) {
      this.messageErrorSize();
      return ;
     }

    this.pictureTaken.emit(webcamImage);
    console.log("handleImage:", this.sizeNow)

  }

  ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
}


  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    console.log("cantImage:", this.cantImage)
    if (this.sizeNow >= this.cantImage) {
      this.condition = true;
    } else {
      this.condition = false;
    }
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    console.log("nextWebcamObservable:", this.sizeNow)

    return this.nextWebcam.asObservable();
  }

}