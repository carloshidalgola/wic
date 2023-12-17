import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CommerceDTO } from 'src/app/model/commerce';
import { CommerceService } from 'src/app/service/commerce.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-info-comerce',
  templateUrl: './info-comerce.component.html',
  styleUrls: ['./info-comerce.component.scss']
})
export class InfoComerceComponent implements OnInit {
   uniquecode: string = ''
  name: string = ''
  address: string = ''
  city: string = ''
  regional: string = ''
  selectional: string = ''
  dataPadre: any[]  = [];
  @Output()
  comerceId: EventEmitter<string> = new EventEmitter();


  constructor(public commerceService: CommerceService
    ,private activeRoute: ActivatedRoute
    ,public store: StoreService) { }
  public commerceData?: any;
  
  ngOnInit(): void {
    this.getCommerceData()
    this.pendienteOtherNovelty()
    console.log("comerceId: ",this.uniquecode);
    this.comerceId.emit(this.uniquecode);
  }

  private getCommerceData() {
    this.commerceService.commerceData$.pipe(
    tap(data => {
      const commerceData: any = {
        "uniqueCode": data?.uniqueCode,
        "name":  data?.name,
        "address": data?.address,
        "city": data?.city,
        "regional": data?.regional,
        "selectional": data?.selectional,
      };
      this.commerceData = commerceData;
      this.uniquecode = this.commerceData.uniqueCode
      this.name = this.commerceData.name
      this.address = this.commerceData.address
      this.city = this.commerceData.city
      this.regional = this.commerceData.regional
      this.selectional = this.commerceData.selectional
    }),
    tap(data => data)).subscribe();
  }

  public pendienteOtherNovelty(){
     if (this.activeRoute.snapshot.paramMap.get('id')!=null) {
    this.updateChildren()
    this.getData()
     }
  }

  public getData() {
    this.commerceService.getDataCommerceOtherNovelty(this.dataPadre[0].comerceId.toUpperCase()).pipe(
      tap((data) => {
        console.log("DATA COMMERCE", data)
      })
    )
    .subscribe();
  }

  updateChildren() {
    this.store.otherNovelty$.subscribe(f => this.dataPadre = f);
  }

}
