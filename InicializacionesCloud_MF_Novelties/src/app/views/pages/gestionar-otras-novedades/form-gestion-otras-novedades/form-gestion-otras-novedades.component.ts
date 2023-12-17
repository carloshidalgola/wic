import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Const } from 'src/app/service/const';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/service/page.service';
import { StoreService } from 'src/app/service/store.service';
import { DialogComponent } from 'src/app/views/common-components/dialog/dialog.component';
import { CommerceService } from 'src/app/service/commerce.service';

import { FileService } from 'src/app/service/file.service';

import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { OtherNoveltyService } from 'src/app/service/otherNovelty.service';
import { OtherNoveltyModel } from 'src/app/model/otherNovelty';
import { NoveltiesRepository } from 'src/app/domain/repository/novelties.repository';


@Component({
  selector: 'app-form-gestion-otras-novedades',
  templateUrl: './form-gestion-otras-novedades.component.html',
  styleUrls: [
    './form-gestion-otras-novedades.component.scss',
    '../../../shared-component-styles.scss'
  ]
})
export class FormGestionOtrasNovedadesComponent implements OnInit {

  tipoFormato: String = Const.PARAMETERS_FORMAT_OTRAS_NOVEDADES;
  tipoCantidadImagen: String = Const.PARAMETERS_CANT_IMG_OTRAS_NOVEDADES;
  public commerceData?: any;
  datainput: any[] = [];
  IdCommerce: string = '';
  public opened: boolean = false;
  id_asesor: Number = 255;
  sizeFiles: Number = 0;
  status: string = 'PENDING';
  isNotify: Number = 0;
  files: File[] = [];
  tittle: String = 'Mis Otras Novedades';
  codeCommerce: string = '';
  updateNovelty: boolean = false;
  noveltyId: string = '';
  causal: string = '';
  novedad: string = '';
  plates: string[] = [];
  ticketId: string = '';
  comerceId: string = ''
  numberTicket: string = '';

  @Output() onSelectedComerce = new EventEmitter<any>();

  constructor(
    private pageService: PageService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: StoreService,

    private fileService: FileService,

    private otherNoveltyService: OtherNoveltyService,
    private pendingsService: PendingsService,
    private noveltiesRepositry: NoveltiesRepository


  ) { }

  public validNovCaus: Boolean | undefined = false;
  public validPlates: Boolean | undefined = false;

  ngOnInit(): void {
    this.pendingForUrl()
    this.pageService.setHeaderTittle(this.tittle);


    let id = this.route.snapshot.params.codeCommerce;
    // this.noveltyId =

    console.log("CODE COMERCE>", id);

    if (id) {

      this.codeCommerce = id;
    }

    var idN = this.route.snapshot.paramMap.get('id');

    if (idN) {
      this.noveltyId = String(this.route.snapshot.paramMap.get('id'));
      this.updateNovelty = true;
      console.log("para actualziar")
    }

  }

  updateFiles() {
    this.store.files$.subscribe(f => this.files = f);
    console.log("actualizando files:", this.files)
  }

  validateFields() {
    if (this.route.snapshot.paramMap.get('id') !== null)
      return true;

    return (this.validNovCaus && this.validPlates);
  }

  public openDialog(paso: Number) {

    var message = '';
    this.sizeFiles = this.files.length;

    if (paso === 1) {
      message = '¿Estas seguro de procesar la novedad?';
    }

    if (paso == 2) {
      message = '¿Desea notificar al analista?';
    }

    if (paso == 3) {
      message = 'La información solo se guardará en Base de datos y no se enviará notificación ';
    }

    this.dialog.open(DialogComponent, {
      data: {
        text: message,
      },
      width: '430px'
    }).afterClosed().subscribe(item => {

      if (item && paso == 1) {
          this.saveOtherNovelty();
      }

      if (item && paso == 2) {
        this.isNotify = 1;
        this.redirectEndSteps(this.numberTicket);
      }

      if (!item && paso == 2) {
        this.isNotify = 0;
        this.redirectEndSteps(this.numberTicket);
      }


      if (paso == 3) {
        this.isNotify = 0;
        this.redirectEndSteps(this.numberTicket);
      }

    });
  }

  public pendingOtherNovelties() {
    this.pendingsService.getOtherNoveltiesPendings().subscribe((data: any) => {
      if (data.length != 0) {
        this.IdCommerce = data[0].comerceId
        this.datainput = data
        this.numberTicket = data[0].ticketId
        this.opened = true;
        this.store.setOtherNovelty(this.datainput);
        console.log("datainput", data)
      } else {
        this.opened = true;
      }
    },
      (error) => {
        console.log("error pending", error)

        this.opened = true;
      });
  }

  public pendingForUrl() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.pendingOtherNovelties()
    } else {
      this.opened = true;
    }
  }

  saveOtherNovelty() {

    if(this.files.length>0) {
      this.status = 'ENVIADO';
    }

    if (this.updateNovelty) {
    
      
      this.saveFilesNovelty();
    }

    if (!this.updateNovelty) {
      let otherNoveltyRequest: OtherNoveltyModel = {
        userId: 'XT8052',
        status: this.status,
        comerceId: this.comerceId,
        date: this.getDateFormat(new Date()),
        causal: this.causal,
        novelty: this.novedad,
        plates: this.plates,
        description: '',
        noveltyId: '',
        ticketId: '',
        consultType: '',
        consultId: ''
      }
      this.otherNoveltyService.saveOtherNoveltie(otherNoveltyRequest).subscribe(
        (results) => {
          this.noveltyId = results.id;
          this.numberTicket = results.ticketId;
          this.saveFilesNovelty();
        },
        (error) => {
          console.log("error 2222:", error)
        }
      );
    }
  }

 saveFilesNovelty() {

  if (this.files.length > 0) {
    for (var i = 0; i < this.files.length; i++) {
      this.noveltiesRepositry.uploadFile(this.noveltyId, this.files[i]).toPromise().then(
        (results) => {
          console.log("resk", results)
        },
        (error) => {
          console.log("error 2222:", error)
        }
      );
    }
    this.unificateImagenPdf();
  } else {
    this.openDialog(3);
  }

 }

  redirectEndSteps(numberticket: any) {
    const url = `gestionar-otras-novedades/end-other-novelty/${this.noveltyId}/${numberticket}/${this.isNotify}`;
    this.router.navigateByUrl(url);
  }

  getNovedad(novedad: any) {
    this.novedad = novedad;
  }

  getCausal(causal: any) {
    this.causal = causal;
  }


  unificateImagenPdf() {
    let codeNovelty = this.noveltyId;
    this.fileService.unificarImagen(codeNovelty).subscribe(
      response => {
        console.log("Response unificar", response);

        if (response.status) {
          if (!this.updateNovelty) {
           this.openModal();
          } 

          if (this.updateNovelty) {
            this.updateStateNovelty();
          } 
          
        } else {
          this.isNotify = 2;
        }
      },
      error => {
        console.error(error);
        this.isNotify = 2;
      }

    );
  }

  openModal() {
    if (this.sizeFiles > 0) {
      this.openDialog(2);
    } else {
      this.openDialog(3);
    }
  }

  updateStateNovelty() {
    // update novelty
    this.otherNoveltyService.updateStatusOtherNovelty(this.noveltyId, this.status).subscribe(
      (results) => {
        // this.redirectEndSteps(results.ticketId);
        this.openModal();
      },
      (error) => {
        console.log("error 2222:", error)
      }
    );
  }


  getPlates(placas: any) {
    this.plates = placas;
  }


  getDateFormat(date: Date = new Date()) {
    let day = ('0' + date.getDate()).slice(-2)
    let month = ('0' + (date.getMonth() + 1)).slice(-2)
    let year = date.getFullYear()
    return `${year}-${month}-${day}`
  }

  getComerceId(comerceId: any) {
    this.comerceId = comerceId;
  }


  public clickCancelar() {
    const url = `gestionar-otras-novedades`;
    this.router.navigateByUrl(url);
  }

}
