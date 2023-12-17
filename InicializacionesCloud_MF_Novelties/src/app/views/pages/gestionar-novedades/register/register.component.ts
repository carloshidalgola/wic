import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
// import {UploadImageComponent} from '../upload-image/upload-image.component';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { MatDialog } from '@angular/material/dialog';
import { EndDialogComponent } from './end-dialog/end-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Const } from 'src/app/service/const';
import { DialogComponent } from 'src/app/views/common-components/dialog/dialog.component';

@Component({
  selector: 'novelties-web-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  tipoFormato: String = Const.PARAMETERS_FORMAT_OTRAS_NOVEDADES;
  tipoCantidadImagen: String = Const.PARAMETERS_CANT_IMG_OTRAS_NOVEDADES;
  id_asesor: Number = 255;
  @ViewChild('stepper')
  stepper!: MatStepper;
  frmStepTwo: FormGroup;
  numberticket: any = "24913";
  isNotify: Number = 1;

  pendings: number = 0

  constructor(private _formBuilder: FormBuilder,
    private route: Router,
    private _fileService: FileService,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute) {

    this.frmStepTwo = new FormGroup({});
  }

  ngOnInit() {
    this.pendientes();
  }

  ngAfterViewInit() {
    if (this.pendings == 1) {
      this.stepper.next();
    }
  }

  get step1() {
    return;
    // return this.uploadImageComponent ? this.uploadImageComponent.uploadForm : null;
  }

  public cancel() {
    this.route.navigateByUrl('/novelties/pendings');
  }

  onNextClicked() {

    this.stepper.next();
  }

  onNextClicked1() {
    this.stepper.next();
  }

  pendientes() {
    console.log('ID Novedades Pendientes', this.activeRoute.snapshot.paramMap.get('id'))
    if (this.activeRoute.snapshot.paramMap.get('id') != null) {
      this.pendings = 1;
      console.log("Pendientes", this.pendings)
    }
  }

  private openDialog(msg: String): void {

    this.dialog.open(DialogComponent, {
      data: {
        text: msg,
      },
      width: '430px'
    }).afterClosed().subscribe(item => {

      const url = `gestionar-novedades/end-novelty/${this.numberticket}/${this.isNotify}`;
      this.route.navigateByUrl(url);

    });

  }

  public confirmar() {

    let code = "6352ec1f0e0c166d4e313217";
    this._fileService.unificarImagen(code).subscribe(
      response => {
        console.log("Response unificar", response);
        let msg;
        if (response.status) {
          msg = "La novedad se ha generado con exito";
        } else {
          msg = "Ops , no se pudo generar la novedad";
        }
        this.openDialog(msg);
      },
      error => {
        console.error(error)
        let data = { msg: "Ops , no se pudo generar la novedad", icon: "" }
        console.error(data);
      }
    )
  }

}