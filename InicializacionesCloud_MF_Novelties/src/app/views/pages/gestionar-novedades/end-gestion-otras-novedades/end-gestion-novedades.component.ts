import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-end-gestion-novedades',
  templateUrl: './end-gestion-novedades.component.html',
  styleUrls: ['./end-gestion-novedades.component.scss']
})
export class EndGestionNovedadesComponent implements OnInit {

  numberTicket:any;
  isNotify:any;

  constructor(private clipboard: Clipboard, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      console.log("params:",params)

      if(params.has('numberticket')) {
        this.numberTicket = params.get('numberticket');
      }

      if(params.has('isNotify')) {
        this.isNotify = params.get('isNotify');
      }

    });
  }

  copy() {
    this.clipboard.copy(this.numberTicket);
  }

  backHome() {
    
  }
}
