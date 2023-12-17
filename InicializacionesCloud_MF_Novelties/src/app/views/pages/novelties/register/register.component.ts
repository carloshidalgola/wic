import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {UploadImageComponent} from '../upload-image/upload-image.component';
import {MatStepper} from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { MatDialog } from '@angular/material/dialog';
import { EndDialogComponent } from './end-dialog/end-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'novelties-web-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild(UploadImageComponent) uploadImageComponent: UploadImageComponent | undefined;
 

  @ViewChild('stepper')
  stepper!: MatStepper;
  frmStepTwo: FormGroup;

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

   ngAfterViewInit(){
    if (this.pendings == 1) {
      this.stepper.next();
    }
   }

   get step1() {
        return this.uploadImageComponent ? this.uploadImageComponent.uploadForm : null;
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

    pendientes(){
    console.log('ID Novedades Pendientes', this.activeRoute.snapshot.paramMap.get('id'))
     if (this.activeRoute.snapshot.paramMap.get('id')!=null) {
        this.pendings = 1;
        console.log("Pendientes", this.pendings)
     }
  }

    private openDialog(data:object): void {
    const dialogRef = this.dialog.open(EndDialogComponent, {
      width: '250px',
      height: '500px',
      data: data
    });

    alert("confirmar");

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    public  confirmar() {

  //   //alert("confirmar");
     let code ="6352ec1f0e0c166d4e313217";
   this._fileService.unificarImagen(code).subscribe(
      response => {
        console.log("Response unificar", response);
        let data ;
        if(response.status){
          data = {msg:"La novedad se ha generado con exito", icon:"check_circle_outline"}
          
         }else{
          data = {msg:"Ops , no se pudo generar la novedad", icon:""}
          

         }
         this.openDialog(data);
       },
       error => {
         console.error(error)
         let data = {msg:"Ops , no se pudo generar la novedad", icon:""}
         this.openDialog(data);
      }
    )
  }

}