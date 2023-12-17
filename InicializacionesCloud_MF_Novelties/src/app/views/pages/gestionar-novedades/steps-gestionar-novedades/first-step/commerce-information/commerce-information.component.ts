import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommerceDTO } from 'src/app/model/commerce';
import { CommerceService } from 'src/app/service/commerce.service';

@Component({
  selector: 'app-commerce-information',
  templateUrl: './commerce-information.component.html',
  styleUrls: ['./commerce-information.component.scss']
})
export class CommerceInformationComponent implements OnInit {

  constructor(
    private commerceService: CommerceService,
  ) { }

  public commerceData?: CommerceDTO;

  ngOnInit(): void {
    this.getCommerceData();
  }

  public infoData: any = []

  private getCommerceData() {
    this.commerceService.commerceData$.pipe(
    tap(data => {
      const commerceData: CommerceDTO = {
        "uniqueCode": data?.uniqueCode,
        "name":  data?.name,
        "address": data?.address,
        "city": data?.city,
        "regional": data?.regional,
        "selectional": data?.selectional,
      };
      this.commerceData = commerceData;
    }),
    tap(data => this.fillInfoData())).subscribe();
  }

  private fillInfoData() {
    this.infoData = [
      {data: 'Código Único', info: this.commerceData?.uniqueCode},
      {data: 'Nombre', info: this.commerceData?.name},
      {data: 'Dirección del Comercio', info: this.commerceData?.address},
      {data: 'Ciudad', info: this.commerceData?.city},
      {data: 'Regional', info: this.commerceData?.regional},
      {data: 'Seccional', info: this.commerceData?.selectional},
    ]
  }
}
