import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Description } from 'src/app/model/commerce';
import { CommerceService } from 'src/app/service/commerce.service';

@Component({
  selector: 'app-terminal-information',
  templateUrl: './terminal-information.component.html',
  styleUrls: ['./terminal-information.component.scss']
})
export class TerminalInformationComponent implements OnInit {

  constructor(
    private commerceService: CommerceService,
  ) { }

  public terminalData?: Description;

  public infoData: any = []

  ngOnInit(): void {
    this.getTerminalData();
  }

  private getTerminalData() {
    this.commerceService.commerceData$.pipe(
    tap(data => {
      this.terminalData = data?.description;
    }),
    tap(data => this.fillInfoData())).subscribe();
  }

  private fillInfoData() {
    this.infoData = [
      {data: 'Placa', info: this.terminalData?.plate},
      {data: 'Terminal', info: this.terminalData?.terminal},
      {data: 'Tipo Terminal', info: this.terminalData?.terminalType},
      {data: 'Nivel de CAT', info: this.terminalData?.catLevel},
      {data: 'Perfil Transacción', info: this.terminalData?.transactionProfile},
      {data: 'Perfil Producto', info: this.terminalData?.productProfile},
      {data: 'Ubicación', info: this.terminalData?.ubication},
      {data: 'Sub-lugar', info: this.terminalData?.subPlace},
      {data: 'Bodega', info: this.terminalData?.store},
      {data: 'Datáfono', info: this.terminalData?.dataphone},
      {data: 'Información de Tecnología', info: this.terminalData?.technologyInfo},
    ]
  }
}
