import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParameterConsultTypeModel } from 'src/app/model/parameter';
import { ParameterService } from 'src/app/service/parameter.service';
import { StoreService } from 'src/app/service/store.service';
import { FormGestionOtrasNovedadesComponent } from '../form-gestion-otras-novedades.component';

@Component({
  selector: 'app-config-nov-causal',
  templateUrl: './gestionar-otras-novedades.component.html',
  styleUrls: ['./gestionar-otras-novedades.component.scss']
})
export class ConfigNovCausalComponent implements OnInit {

  public formConfigTerminal!: FormGroup;
  @Output()
  novedad: EventEmitter<string> = new EventEmitter();

  @Output()
  causal: EventEmitter<string> = new EventEmitter();;

  formAcordion = false;
  dataPadre: any[]  = [];
  public opened: boolean = false;
  public listNovelties : ParameterConsultTypeModel[] = [];
  public listCausal: ParameterConsultTypeModel[] = [];
  public listCausalFilter: ParameterConsultTypeModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private paramService: ParameterService,
    private formGestionOtrasNovedadesComponent: FormGestionOtrasNovedadesComponent,
    public store: StoreService,
    private activeRoute: ActivatedRoute) {
      this.buildForm();
    }

  private buildForm() {
    this.formConfigTerminal = this.formBuilder.group({
      novedad: ['', Validators.required],
      causal: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getConsultNovedades();
    this.getConsultCausales();

  }
  ngDoCheck(){
  }

  private getConsultNovedades() {
    this.paramService.getListParameter("OTRAS_NOVEDADES")
    .subscribe((res) => {
      this.listNovelties = res;
      console.log("lisssssss", this.listNovelties)


    });
  }

  private getConsultCausales() {
    this.paramService.getListParameter("CAUSAL")
    .subscribe((res) => {
      this.listCausal = res;
      this.pendienteOtherNovelty();
    });
  }

  public setCausalValues(e: any) {

    this.listCausalFilter = this.listCausal.filter((item) => {
      return item.parentId === this.formConfigTerminal.get('novedad')?.value;
    });

    this.formConfigTerminal.get('causal')?.setValue('');
    this.validateField();
    // });
    this.novedad.emit(e.value);
  }

  public setCausal(e: any) {
    this.causal.emit(e.value);
  }

  toggleFormAcordion():void{
    this.formAcordion =!this.formAcordion;
  }

  validateField() {
    const novedad = (this.formConfigTerminal.get('novedad')?.valid);
    const causal = (this.formConfigTerminal.get('causal')?.valid);

    this.formGestionOtrasNovedadesComponent.validNovCaus = (novedad && causal);
  }

  public pendienteOtherNovelty(){
    if (this.activeRoute.snapshot.paramMap.get('id')!=null) {
      this.opened = true
      console.log("ajdomom", this.listNovelties)
       this.updateChildren()
    }
 }

 updateChildren() {
    this.store.otherNovelty$.subscribe(f => this.dataPadre = f);
    console.log("actualizando files:",this.dataPadre[0])
    this.formConfigTerminal.controls["novedad"].setValue(Number(this.dataPadre[0].novelty));
    const myMaybeNullElement = window.document.getElementById("autoclick")
    myMaybeNullElement?.click();
    this.setCausalValues(0);
    this.formConfigTerminal.controls["causal"].setValue(Number(this.dataPadre[0].causal));

  }
}
