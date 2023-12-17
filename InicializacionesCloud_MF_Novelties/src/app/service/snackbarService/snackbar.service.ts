import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  // public testSnackbar(mensaje: string) {
  //   this.snackBar.openFromComponent(TestSnackbarComponent, {
  //     data: {
  //       mensaje: mensaje,
  //     },
  //     hasAction: true,
  //     duration: 5 * 1000,
  //     horizontalPosition: 'end',
  //     verticalPosition: 'top'
  //   });
  // }
}
