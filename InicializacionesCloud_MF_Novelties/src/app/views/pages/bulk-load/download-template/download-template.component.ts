import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ParameterRepository } from 'src/app/domain/repository/parameter.repository';
import { Const } from 'src/app/service/const';
import { FileRepository } from 'src/app/domain/repository/file.repository';
import { Utils } from 'src/app/util/utils';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'download-template-novelites-web',
  templateUrl: './download-template.component.html',
  styleUrls: ['./download-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadTemplateComponent implements OnInit {

  fileName: string = '';
  dataUrl: string = '';
  fileBlob: File | undefined;
  fileUrl: any;
  fileBase64: string = '';
  errorFile:boolean = true;


  constructor( private _snackBar: MatSnackBar, private parameterRepository: ParameterRepository, private fileRepositry: FileRepository,) {
  }

  ngOnInit() {
    this.getListParameters();
  }

  getListParameters() {

    this.parameterRepository.getListParameter(Const.PARAMETERS_LINK_PLANTILLA).subscribe(
      (results) => {
        console.log("results:", results)
        this.dataUrl = results[0].description;
        this.fileName = results[0].textValue;
        // null-ejemplo 2.xls
        //null-prueba2.xlsx
        this.errorFile = false
      },
      (error) => {
        console.log("error 2222:", error)
        this.errorFile = true
      }
    );

  }

  getBinaryExcel() {

    this.fileRepositry.downloadTemplate(this.fileName).subscribe(
      (results) => {

        this.fileBase64 = results.file;
        this.errorFile = false
        this.downloadFile();
      },
      (error) => {
        console.log("error 2222:", error)
        this.errorFile = true
        this.downloadFile();
      }
    );

  }

  downloadFile() {

    if(this.errorFile) {
      
    this._snackBar.open(
      'No fue posible descargar la plantilla, reintente nuevamente',
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });

      return;

    }
 
    const linkSource = Utils.linkSourceDowloadFileOfBase64(this.fileBase64,Const.CARGA_MASIVA_FORMAT_DOWNLOAD)
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = this.fileName;
    downloadLink.click();

  }

}