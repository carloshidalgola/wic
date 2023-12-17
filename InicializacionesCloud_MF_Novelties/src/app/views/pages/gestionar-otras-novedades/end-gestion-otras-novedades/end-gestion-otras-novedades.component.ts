import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-gestion-otras-novedades',
  templateUrl: './end-gestion-otras-novedades.component.html',
  styleUrls: [
    './end-gestion-otras-novedades.component.scss',
    '../../../shared-component-styles.scss'
  ]
})
export class EndGestionOtrasNovedadesComponent implements OnInit {

  numberTicket:any;
  noveltyId:any;
  isNotify:any;

  constructor(
    private clipboard: Clipboard,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if(params.has('numberticket')) {
        this.numberTicket = params.get('numberticket');
      }

      if(params.has('noveltyId')) {
        this.noveltyId = params.get('noveltyId');
      }

      if(params.has('isNotify')){
        this.isNotify = params.get('isNotify');
      }

    });
  }

  copy() {
    this.clipboard.copy(this.numberTicket);
  }

  public irInicio(){
    this.router.navigateByUrl('/gestionar-otras-novedades');
  } 
 
  public generarOtraNovedad(){
    this.router.navigateByUrl('/gestionar-otras-novedades/configurar-novedad/12345');
  }
}