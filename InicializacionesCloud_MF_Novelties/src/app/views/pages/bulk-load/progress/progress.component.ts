import {
  Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter,
  ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//import { Observable } from 'rxjs';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/range';
import { range } from 'rxjs/observable/range';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { zip, tap } from 'rxjs/operators';

@Component({
  selector: 'progress-novelites-web',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit, OnChanges {


  @Input()
  source!: Observable<number>;
  @Input() value: number = 0;
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Input() statusOperation: string = "pendiente";
  progreso!: number;
  suscripcion!: Subscription;
  working!: boolean;

  public statusProgress:string =  "progress-bar";

  constructor(private cd: ChangeDetectorRef) {
    this.cancelar();
  }

  ngOnInit() {
    this.working = false;
    
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.source) {
      this.setStatusColor();
      console.log("CHANGE VALUE:",changes.value);
      if(!changes.value){
        return;
      }
      
      let pg = Number(changes.value.currentValue);
      let rs = parseInt(100*pg+"");
      this.progreso =rs;
      
      console.log("CHANGE STATUS:",changes.statusOperation)
      
    }
  }

  get porcentaje(): string {
    return `${this.progreso}%`;
  }

 /* iniciar() {
    if (!!this.source) { // using source
      this.progreso = 0;
      this.suscripcion = this.source.pipe(tap(tick => {
        this.progreso++;
        }
        ))
        .subscribe(paso => { this.cd.markForCheck() }, error => console.error(error), () => this.suscripcion);
    } else { // using value
      this.start.emit();
    }
    this.working = true;
  }*/

  private cancelar() {
 
  }

  private limpiar() {
    this.progreso = 0;
  }

  private setStatusColor(){
    console.log("set color progress bar:",this.statusProgress);
    if(this.statusOperation=='exito'){
      this.statusProgress = "progress-bar bar-exito";
    }

    if(this.statusOperation=='error'){
      this.statusProgress = "progress-bar bar-error";
    }
    if(this.statusOperation=='pendiente'){
      this.statusProgress = "progress-bar";
    }
  }
}