import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Commerce } from 'src/app/model/commerce';
import { CommerceService } from 'src/app/service/commerce.service';
import { GestionarOtrasNovedadesComponent } from '../gestionar-otras-novedades.component';

@Component({
  selector: 'app-search-gestionar-otras-novedades',
  templateUrl: './search-gestionar-otras-novedades.component.html',
  styleUrls: ['./search-gestionar-otras-novedades.component.scss']
})
export class SearchGestionarOtrasNovedadesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,private route: Router, public gestionarOtrasNovedadesComponent: GestionarOtrasNovedadesComponent
    , private _snackBar: MatSnackBar
    , public commerceService: CommerceService
  ) { this.buildForm();}
  private buildForm() {
    this.formData = this.formBuilder.group({
      consulta: ['1'],
      codigo: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  public formData!: FormGroup;
  private data: Commerce | null = null;
  public validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = (this.formData.get('consulta')?.value === '1') ? /^([0-9]+)$/ : /^([A-Za-z0-9]+)$/;
    if (!regex.test(key)) {
    event.returnValue = false;
      if (event.preventDefault) {
      event.preventDefault();
      }
    }
  }

  private callSnackBar() {
    this._snackBar.open(
      'No se encuentra información de acuerdo a la búsqueda',
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class'],
        duration: 3000
      });
  }

  public cancel() {
    this.cleanForm();
    this.gestionarOtrasNovedadesComponent.opened = false;
  }

  public cleanForm () {
    this.formData.reset();
    this.formData.get('consulta')?.setValue('1');
  }

  public consult() {
    const consult = this.formData.get('consulta')?.value;
    const code = this.formData.get('codigo')?.value;
    let next = false;

    this.commerceService.getDataCommerceOtherNovelty(code.toUpperCase()).pipe(
      tap((data) => {
        this.data = data;
        if (Object.entries(data).length === 0) {
          this.data = data;
          next = false
        } else {
          next = true
        };
      }),
      tap((data) => {
        if (next === false) {
          this.callSnackBar();
          // this.formData.get('codigo')?.setErrors({ invalid: true });
        } else {
          this.route.navigateByUrl('/gestionar-otras-novedades/config-novelties');
        }

        return data;
      })
    )
    .subscribe();
  }

}
