import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  // METODO PARA ABRIR UN POPUP
  // EN ID DARLE UNA PALABRA CLAVE PARA PODER CERRARLO CON LA FUNCION closeDialog()
  // openLoadingWindow(msg: string) {
  //   this.dialog.open(LoadingWindowComponent, {
  //     id: 'loadingWindow',
  //     width: '100%',
  //     height: '100%',
  //     hasBackdrop: true,
  //     backdropClass: 'blur-backdrop',
  //     disableClose: true,
  //     data: {
  //       msg: msg,
  //     },
  //   });
  // }

  closeDialog(id: string = 'loadingWindow') {
    this.dialog.getDialogById(id)?.close();
  }

  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
