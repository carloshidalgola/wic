import { Component, OnInit } from '@angular/core';

import {environment} from 'src/environments/environment'
import {micros_uri} from '../util/contantes.micros'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  title = "Demo configuracion"
  constructor() { }

  ngOnInit(): void {
    console.log("URL MICRO:",  environment.url_microservice_usuario)
    console.log("URI MICRO:",  micros_uri.uri_usuario_validar)
   
  }

  public  validarPerfil(){
    //token = usuarioService.getToken()

    //login get token(token) = token firmado
    //get codigoComercio(token-firmado)
    //comercio get nombreComercio()
    //set valid termial()
  }
}
