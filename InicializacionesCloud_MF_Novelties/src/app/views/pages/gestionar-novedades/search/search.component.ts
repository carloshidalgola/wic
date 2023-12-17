import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommerceService } from 'src/app/service/commerce.service';
import { Commerce } from 'src/app/model/commerce';
import { tap } from 'rxjs/operators';
import { ParameterService } from 'src/app/service/parameter.service';
import { ParameterConsultTypeModel } from 'src/app/model/parameter';
import { PendingsComponent } from '../pendings/pendings.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router,
    private commerceService: CommerceService,
    private parameterService: ParameterService,
    private pendingsComponent: PendingsComponent,
    ) {
      this.buildForm();
    }

  private buildForm() {
    this.formData = this.formBuilder.group({
      consulta: ['1'],
      codigo: ['', Validators.required]
    });
  }

  public selectData: ParameterConsultTypeModel[] = [];

  private data: Commerce | null = null;

  ngOnInit(): void {
    this.parameterService.getListParameter("TIPO_CONSULTA")
    .subscribe((res) => {
      this.selectData = res;
    });
  }

  public formData!: FormGroup;

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

  public cleanInput (event: any) {
    this.formData.get('codigo')?.reset();
  }

  public getConsultTypeTitle(code: Number) {
    let tittle = "";
    this.selectData.forEach((data) => {
      if (data.code == code)
        tittle = data.description;
    });
    return tittle;
  }

  public consult() {
    const consult = this.formData.get('consulta')?.value;
    const code = this.formData.get('codigo')?.value;
    let next = false;

    this.commerceService.getCommerceData(consult, code.toUpperCase()).pipe(
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
          this.route.navigateByUrl('/novelties/register');
        }

        return data;
      })
    )
    .subscribe();
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
    this.pendingsComponent.opened = false;
  }

  public cleanForm () {
    this.formData.reset();
    this.formData.get('consulta')?.setValue('1');
  }
}
