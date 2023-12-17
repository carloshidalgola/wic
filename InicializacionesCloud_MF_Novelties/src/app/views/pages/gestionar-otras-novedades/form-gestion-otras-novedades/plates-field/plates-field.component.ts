import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, Validators} from '@angular/forms';
import {Component,OnInit, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ParameterConsultTypeModel } from 'src/app/model/parameter';
import { ParameterService } from 'src/app/service/parameter.service';
import { FormGestionOtrasNovedadesComponent } from '../form-gestion-otras-novedades.component';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-plates-field',
  templateUrl: './plates-field.component.html',
  styleUrls: [
    './plates-field.component.scss',
    '../../../../shared-component-styles.scss'
  ]
})
export class PlatesFieldComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  placaCtrl = new FormControl();
  filteredPlacas: Observable<string[]>;
  placas: string[] = [];
  allPlacas: string[] = [];
  limitePlaca!: Number;
  public opened: boolean = false;
  dataPadre: any[]  = [];

  @Output()
  plates: EventEmitter<string[]> = new EventEmitter();

  public parameter: ParameterConsultTypeModel[] = [];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor(
    private paramService: ParameterService,
    private formGestionOtrasNovedadesComponent: FormGestionOtrasNovedadesComponent,
    private store: StoreService,
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) {
    this.filteredPlacas = this.placaCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allPlacas.slice()));
  }

  add(event: MatChipInputEvent): void {

    if (this.limitePlaca < (this.placas.length + 1)) {
      this.callSnackBar("Máximo de placas excedido");
      // alert("Máximo de placas excedido");
      return;
    }

    let found = this.placas.includes(event.value );

    if (found) {
      this.callSnackBar("Placa repetida");
      // alert("Placa repetida");
      return;
    }

    const value = (event.value || '').trim();

    if (value) {
      this.placas.push(value);

      this.plates.emit(this.placas);

    }

    event.chipInput!.clear();
    this.placaCtrl.setValue(null);

    this.validateField();
  }

  remove(placa: string): void {
    const index = this.placas.indexOf(placa);

    if (index >= 0) {
      this.placas.splice(index, 1);
      this.plates.emit(this.placas);
    }

    this.validateField();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.placas.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.placaCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allPlacas.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  private getLimitePlaca() {
    this.paramService.getListParameter("LIMITE_PLACA")
    .subscribe((res) => {
      this.parameter = res;
      this.limitePlaca = this.parameter[0].numberValue;
    });
  }

  public pendienteOtherNovelty(){
    if (this.activeRoute.snapshot.paramMap.get('id')!=null) {
      this.opened = true
     console.log("ENTRO PLACA URL")
   this.updateChildren()
    }
 }

 updateChildren() {
  this.store.otherNovelty$.subscribe(f => this.dataPadre = f);
  this.placas = this.dataPadre[0].plates;
}
retirada() {
  console.log("RETIRADA",this.placas)
}

  ngOnInit(): void {
    this.getLimitePlaca();
    this.pendienteOtherNovelty()
  }

  validateField() {
    const placas = (this.placas.length !== 0);

    this.formGestionOtrasNovedadesComponent.validPlates = (placas);
    return (placas)
  }

  private callSnackBar(msg: string) {
    this._snackBar.open(
      msg, 'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class'],
        duration: 3000
      });
  }
}
