import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../service/usuario-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../views/shared-component-styles.scss'
  ]
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private userServ : UsuarioService ) {

   }

  ngOnInit(): void {
    console.log("LOAD COMPONENT LOGIN")
  }

  public validarLogin(): void{
    this.userServ.validarUsuario("AVE","BBBB");
  }

}
