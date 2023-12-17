import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ParameterConsultTypeModel } from 'src/app/model/parameter';
import { ParameterService } from 'src/app/service/parameter.service';
import { ConsultTicketsComponent } from '../consult-tickets/consult-tickets.component';
import {
  NativeDateAdapter,
  DateAdapter,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { formatDate } from '@angular/common';

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'short', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'short'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd/MM/yyyy',this.locale);
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})
export class SearchTicketComponent implements OnInit {

  public formTicketsData!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router,
    private parameterService: ParameterService,
    private consultTicketsComponent: ConsultTicketsComponent,
  ) {
    this.buildForm();
  }

  maxDate?: Date | null = null;

  private buildForm() {
    this.formTicketsData = this.formBuilder.group({
      ticket: [''],
      type: [0],
      typeId: [''],
      dateRangeStart: ['', Validators.required],
      dateRangeEnd: ['', Validators.required],
      noveltyState: [0],
    });
  }

  public consultTicketType: ParameterConsultTypeModel[] = [];
  public consultTicketState: ParameterConsultTypeModel[] = [];

  ngOnInit(): void {
    this.getConsultTicketTypes();
    this.getConsultTicketStates();
  }

  private getConsultTicketTypes() {
    this.parameterService.getListParameter("TIPO_CONSULTA_TICKET")
    .subscribe((res) => {
      this.consultTicketType = res;
    });
  }

  private getConsultTicketStates() {
    this.parameterService.getListParameter("ESTADO_NOVEDAD")
    .subscribe((res) => {
      this.consultTicketState = res;
    });
  }

  public blockRange() {
    const day = this.formTicketsData.get('dateRangeStart')?.value.getDate();
    const month = this.formTicketsData.get('dateRangeStart')?.value.getMonth();
    const year = this.formTicketsData.get('dateRangeStart')?.value.getFullYear();

    this.maxDate = new Date(year, month, day + 10);
  }

  public setValidations(e: any) {
    this.formTicketsData.get('typeId')?.reset();

    if (this.formTicketsData.get('type')?.value !== 0) {
      this.formTicketsData.get('typeId')?.setValidators(Validators.required);
      this.formTicketsData.get('typeId')?.setErrors({ invalid: true });
      return;
    }
    this.formTicketsData.get('typeId')?.setErrors(null);
    return;
  }

  public getMaxLength() {
    const length = (this.formTicketsData.get('type')?.value === 3)
      ? '10' : '16';

    return length;
  }

  public validateFormat(event: any) {
    let key;

    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }

    const regex = (this.formTicketsData.get('type')?.value === 1) ? /^([A-Za-z0-9]+)$/ : /^([0-9]+)$/;


    if (!regex.test(key)) {
    event.returnValue = false;
      if (event.preventDefault) {
      event.preventDefault();
      }
    }
  }

  public validateTicketFormat(event: any) {
    let key;

    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }

    const regex = /^([0-9]+)$/;

    if (!regex.test(key)) {
    event.returnValue = false;
      if (event.preventDefault) {
      event.preventDefault();
      }
    }
  }

  public consult() {
    let next = false;

    if (next === false) {
      this.callSnackBar();
    } else {
      this.route.navigateByUrl('/novelties');
    }
    return;
  }

  private callSnackBar() {
    this._snackBar.open(
      'No se encuentra información de acuerdo a la búsqueda',
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class']
      });
  }

  public cancel() {
    this.cleanForm();
    this.formTicketsData.get('type')?.setValue(0);
    this.formTicketsData.get('noveltyState')?.setValue(0);
    this.clearMaxRange();
    this.consultTicketsComponent.opened = false;
  }

  public clearMaxRange() {
    console.log(this.formTicketsData.get('dateRangeEnd')?.value);
    if (this.formTicketsData.get('dateRangeEnd')?.value !== ''
        && this.formTicketsData.get('dateRangeEnd')?.value !== null)
      this.maxDate = null;
    else
      this.blockRange();
  }

  public cleanForm () {
    this.formTicketsData.reset();
  }
}
