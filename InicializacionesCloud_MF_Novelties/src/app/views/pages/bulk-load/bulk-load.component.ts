import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NoveltiesRepository } from 'src/app/domain/repository/novelties.repository';
import { ParameterRepository } from 'src/app/domain/repository/parameter.repository';
import { ParameterModel } from 'src/app/model/parameter';
import { Const } from 'src/app/service/const';
import {UserService} from "src/app/service/user.service";
import { Utils } from 'src/app/util/utils';
import { range } from 'rxjs/observable/range';
import { interval } from 'rxjs/observable/interval';
//import { range, interval } from 'rxjs/observable';
import { zip } from 'rxjs/operators';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'bulk-load-novedad',
  templateUrl: './bulk-load.component.html',
  styleUrls: ['./bulk-load.component.scss']
})
export class BulkLoadComponent implements OnInit {


  public uploadForm!: FormGroup;
  disabledCarga: boolean = false;
  

  files: File[] = [];
  filesPreview: File[] = [];
  filesPreviewRename: File[] = [];
  loading: boolean = false;
  disabledProcesar: boolean = true;

  filesError: any[] = [];
  typeFiles: ParameterModel[] = [];
  cantFiles: ParameterModel[] = [];
  cantImage: number = Const.CARGA_MASIVA_CANT_IMAGEN;
  typeFilesStr: string = Const.CARGA_MASIVA_FORMAT;
  typeFilesMessage: string = Const.CARGA_MASIVA_FORMAT_TEXTO;

  condition: string = 'not-disabled';
  maxFileSize: number = Const.CARGA_MASIVA_SIZE;
  source!: Observable<number>;
  subscription!: Subscription;
  value: number = 0;

  filesResult : any;

  public grillaResultado: any[] = [];
  statusOperation: string = "pendiente";
  private maxRangeProgress = 10;
  private counterProgress = 0;

  constructor(private noveltiesRepositry: NoveltiesRepository, 
    private _snackBar: MatSnackBar,
    public _fileService: FileService
    ) {
  }

  ngOnInit() {
    /*this.source = range(1, 100).pipe(
      zip(interval(100), (r, i) => r),
    );*/
  }

   sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  iniciar() {
    console.log("iniciar", this.value);
    //this.subscription = this.source.subscribe(valor => this.value = valor);
  }

  onSelect(event: any) {
    console.log(event)
    this.files.push(...event.addedFiles);
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

    //inicia el proceso de validacion
    // inicia el progress bar
    this.loading = true;
    let counter = 0;
    this.iniciar();
    this.value = 0;
    this.counterProgress = 0;
    this._fileService.cargarArchivoTelecarga("erick front",this.files[0]).subscribe(
      (results: any) => {
        //console.log("result carga imagen", results)
        if (typeof (results) === 'object') {
  
       
          console.log("result carga imagen 2",  results.body)
         
          if(results.body ){
            if(results.body.status){
              //this.loading = true; // Flag variable 
              this.loading = false; // Flag variable 
              console.log("FINALIZADO CARGA EXITOSO");
              this.statusOperation = "exito";
              this.filesResult =results.body;
              this.validarTodoLosCasos();
              //empiezo a validar
              this.updateProgress();
             }else{
              this.statusOperation = "error";
             }
          
          }else if(results.type){
            console.log("counter carga imagen:",results.type);
            //this.source.subscribe(counter+5);
            this.updateProgress();
            console.log("current value:"+ this.value);
          }
      }
      },
      (error) => {
        console.log("result carga imagen error:", error)
        this.statusOperation = "error";

        this.fillAllProgress();
  
      
      }
    );
  

  
  }

  private updateProgress(){
    console.log("Rang" + this.value + "||" + this.counterProgress);
    if(this.counterProgress >= this.maxRangeProgress){
      return;
    }
    this.counterProgress++;

    this.value= (this.counterProgress)/this.maxRangeProgress;
    console.log("Rango" + this.value + "||"+ this.counterProgress + "||" +this.maxRangeProgress);
  }
  messageErrorSize(size:number) {

    var maximoFiles = "0kb";
    if (this.maxFileSize > 0) {
      maximoFiles = Utils.convertBytestoMegaBytes(this.maxFileSize);
    }

    var textoMessage = ''

    if(size==1) {
      textoMessage =  'El límite definido es de hasta '+this.cantImage+' imágenes'
    } else {
      textoMessage ='Archivo excede peso máximo, es ' +  maximoFiles;
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
      'Archivo no cumple con formato válido, es ' + this.typeFilesMessage,
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });

  }

  public procesarArchivo() {
    console.log("procesar file final");


  }

  consulta() {

  }

  onRemove(event: any) {
    console.log(event);

    this.files.splice(this.files.indexOf(event), 1);

    if (this.files.length < this.cantImage) {
      this.disabledCarga = false;
      this.condition = 'not-disabled';

    }

    this.grillaResultado = [];
    this.statusOperation = "pendiente";
    this.disabledProcesar = true;
  }

  private validarArchivoCargado(){
    this.updateProgress();
    let codeFile = this.filesResult.body.codeFile;
    this._fileService.validarCantidad(codeFile).subscribe(
      (results: any) => {
        console.log("validar carga file", results)
        if(!results.status){
          
          this.grillaResultado.push({'message':results.body.errors[0],'showDetail':false});
          this.statusOperation = "error";
          this.disabledProcesar = true;
          this.fillAllProgress();
        }else{
          this.disabledProcesar = false;
          this.validarEstructuraData();
        }
         this.updateProgress();
      },
      (error) => {
        console.log("validar carga file error:", error)
        this.updateProgress();
        this.fillAllProgress();
        this.disabledProcesar = true;
        this.statusOperation = "error";
      }
    )
  }

  private validarTodoLosCasos(){
    this.validarArchivoCargado();
    

  }

  private validarEstructuraData(){
    this.disabledProcesar = true;
    let codeFile = this.filesResult.body.codeFile;
    this._fileService.validarDataEstructura(codeFile).subscribe(
      (results: any) => {
        if(!results.status){
          if (!results.body.cabeceras) {
            this.grillaResultado.push({'message':'Error en la estructura del archivo, por favor valide.','showDetail':false});
            this.disabledProcesar = true;
            this.statusOperation = "error";
          }
          if (results.body.errLength>=1) {
            this.grillaResultado.push({'message':'Error en la data del archivo, por favor verifique.','showDetail':true});
            this.disabledProcesar = true;
            this.statusOperation = "error";
          }
         
        }else{
          this.disabledProcesar = false;
          this.statusOperation = "exito";
        }
        if(results.body){
          console.log("validar data", results.body.errLength)
          console.log("validar data", results.body.cabeceras)
        }
        
         this.updateProgress();
         this.fillAllProgress();
        
      },
      (error) => {
        console.log("validar data:", error)
        this.statusOperation = "error";
        this.disabledProcesar = true;
        this.updateProgress();
        this.fillAllProgress();
      }
    )
  }

  public descargarArchivoError(){
    this._fileService.downloadFileError( this.filesResult.body.codeFile);
  }

  private fillAllProgress(){
    this.updateProgress();

    if(this.counterProgress< this.maxRangeProgress){
      this.counterProgress=this.maxRangeProgress-1;
    }

    this.updateProgress();
  }

  private validarEstructura(){
    this.updateProgress();
  }

 


}
