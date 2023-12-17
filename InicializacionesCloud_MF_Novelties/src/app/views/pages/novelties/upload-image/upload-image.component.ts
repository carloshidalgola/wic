import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, ControlContainer } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ParameterRepository } from 'src/app/domain/repository/parameter.repository';
import { ParameterModel } from 'src/app/model/parameter';
import { forkJoin, Observable } from 'rxjs';

import { NoveltiesRepository } from 'src/app/domain/repository/novelties.repository';
import { Const } from 'src/app/service/const';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Utils } from 'src/app/util/utils';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'novelties-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class UploadImageComponent implements OnInit {

  public uploadForm!: FormGroup;
  @Output() siguientePaso = new EventEmitter<void>();
  @Input()
  events!: Observable<void>;
  disabledCarga: boolean = false;

  files: File[] = [];
  filesPreview: File[] = [];
  filesPreviewRename: File[] = [];


  filesError: any[] = [];
  typeFiles: ParameterModel[] = [];
  cantFiles: ParameterModel[] = [];
  cantImage: number = 0;
  typeFilesStr: string = "";
  typeFilesMessage: string = "";

  condition: string = 'not-disabled';
  maxFileSize: number = 0;

  constructor(public dialog: MatDialog, private parameterRepository: ParameterRepository, private noveltiesRepositry: NoveltiesRepository,
    private _snackBar: MatSnackBar, private parentComp: RegisterComponent) {
  }

  ngOnInit() {

    this.getListParameters();

  }

  // latest snapshot
  public webcamImage!: WebcamImage;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  formatImages() {

    var strTypeFile = "";
    var strTypeFileMessages = "";


    for (var i = 0; i < this.typeFiles.length; i++) {
      strTypeFile += "," + "image/" + this.typeFiles[i].description;
      strTypeFileMessages += "," + this.typeFiles[i].description;
      this.maxFileSize = this.typeFiles[i].numberValue;
    }

    if (strTypeFile != "") {
      this.typeFilesStr = strTypeFile.substring(1);
      this.typeFilesMessage = strTypeFileMessages.substring(1);
    }

  }

  cantImages() {

    if (this.cantFiles.length > 0) {
      this.cantImage = this.cantFiles[0].numberValue;
    }
    console.log("cantidad :", this.cantImage)
  }

  getListParameters() {

    this.parameterRepository.getListParameter(Const.PARAMETERS_FORMAT).subscribe(
      (results) => {
        this.typeFiles = results;
        console.log("typr files", this.typeFiles)
        this.formatImages();
      },
      (error) => {
        console.log("error 2222:", error)
      }
    );

    this.parameterRepository.getListParameter(Const.PARAMETERS_CANT_IMG).subscribe(
      (results) => {
        this.cantFiles = results;
        console.log(" cantFiles", this.cantFiles)
        this.cantImages();
      },
      (error) => {
        console.log("error 2222:", error)
      }
    );

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = { data: this.files, cantImage: this.cantImage, maxFileSize : this.maxFileSize}
    const dialogRef = this.dialog.open(DialogContentCameraComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          this.files.push(result[i]);
        }

        if (this.files.length >= this.cantImage) {
          this.disabledCarga = true;
          this.condition = 'disabled';
        }
      }
    });
  }



   sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  onSelect(event: any) {
    console.log(event)
    this.filesPreview.push(...event.addedFiles);
    var totalRegistros:number =  this.filesPreview.length +  this.files.length;
    var numroFaltantes:number = this.cantImage - this.files.length;
    if(totalRegistros>this.cantImage) {
      this.messageErrorSize(1);
    }
    this.filesPreview =this.filesPreview.slice(0,numroFaltantes);
    var result:File[] = this.filesPreview.map(e => {
      var objNewObject : File;
      objNewObject = Utils.renameFile(e,'2555')
      this.sleep(i * 1000);
       return objNewObject
    });

    console.log(result);
    this.files.push(...result);
    this.filesPreview = [];
    this.filesError.push(...event.rejectedFiles);
    var arraySizeError = []
    var arrayTypeError = []

    if (this.filesError.length >= 1) {

      for (var i = 0; i < this.filesError.length; i++) {
        var reason = this.filesError[i].reason;
        if (reason === 'size') {
          arraySizeError.push("size")
        }

        if (reason === 'type') {
          arrayTypeError.push("type")
        }
      }

      if(arraySizeError.length>0) {
        this.messageErrorSize(5);
      }

      if(arrayTypeError.length>0) {
        this.messageErrorType(); 
      }
    }

    if (this.files.length >= this.cantImage) {
      this.disabledCarga = true;
      this.condition = 'disabled';
    }

    this.filesError = [];
  }

  messageErrorSize(size:number) {

    var maximoFiles = "0MB";
    if (this.maxFileSize > 0) {
      maximoFiles = Utils.convertBytestoMegaBytes(this.maxFileSize);
    }

    var textoMessage = ''

    if(size==1) {
      textoMessage =  'El límite definido es de hasta '+this.cantImage+' imágenes'
    } else {
      textoMessage ='Superó tamaño límite de ' +  maximoFiles;
    }

    this._snackBar.open(
      textoMessage,
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });

  }

  messageErrorType() {

    this._snackBar.open(
      'Extensión no válida, solo se permite ' + this.typeFilesMessage,
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });

  }

  uploadImages() {

    var success: boolean = false;
    for (var i = 0; i < this.files.length; i++) {
      this.noveltiesRepositry.uploadFile("6352ec1f0e0c166d4e313217", this.files[i]).subscribe(
        (results) => {
          console.log("resk", results)
          success = true;
        },
        (error) => {
          console.log("error 2222:", error)
          success = false;
        }
      );
    }

    if (success) {
      this.siguientePaso.emit();
    }

  }

  onRemove(event: any) {
    console.log(event);

    this.files.splice(this.files.indexOf(event), 1);

    if (this.files.length < this.cantImage) {
      this.disabledCarga = false;
      this.condition = 'not-disabled';

    }

  }

}

@Component({
  selector: 'dialog-content-camera',
  templateUrl: './dialog-content-camera.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class DialogContentCameraComponent {
  [x: string]: any;

  files: File[] = [];
  sizeNow: number = 0;
  sizeTemp: number = 0;
  data!: File[];
  cantImage: Number = 0;
  maxFileSize: number = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogContentCameraComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFile: any,
  ) {
    this.data = this.dataFile.data;
    this.cantImage = this.dataFile.cantImage;
    this.maxFileSize = this.dataFile.maxFileSize;
    console.log("dta:", this.data)
    if (this.dataFile.data != null) {
      this.sizeTemp = this.data.length;
      console.log("sizeTemp:", this.sizeTemp)
      this.data = [];

      this.sumFilesSize();
    }
  }
  public webcamImage!: WebcamImage;

  ngOnInit(): void {

  }

  sumFilesSize() {
    console.log(" this.sizeTemp:", this.sizeTemp)
    console.log(" this.data.length:", this.data.length)

    this.sizeNow = this.sizeTemp + this.data.length;
    console.log("this size now", this.sizeNow)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    var typeImagen = "image/jpeg";
    var formato = '.jpeg';
    var newName = + Utils.numeroAFecha() + "_"+ '2555' +formato;

    var imagenBlob: Blob = Utils.b64toBlob(this.webcamImage.imageAsBase64, typeImagen, 512);
    const fileBlob = new File([imagenBlob], newName, {
      lastModified: 151154151554,
      type: imagenBlob.type,
    });

    this.data.push(fileBlob);
    this.sumFilesSize();

  }



  onRemove(event: any) {
    console.log(event);

    this.data.splice(this.files.indexOf(event), 1);

    if (this.data.length < this.cantImage) {
      // this.disabledCarga = false;
    }
    this.sumFilesSize();

  }

}
