import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { micros_uri } from '../util/contantes.micros';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {


  }

  public validarUsuario(user:string, pass:string) :  void{
    console.log("URL MICRO:",  environment.url_microservice_usuario)
    console.log("URI MICRO:",  micros_uri.uri_usuario_validar)
    console.log("user:",  user)
    console.log("pass:",  pass)


    let  valida_user =  environment.url_microservice_usuario + micros_uri.uri_usuario_validar;


  }

}
