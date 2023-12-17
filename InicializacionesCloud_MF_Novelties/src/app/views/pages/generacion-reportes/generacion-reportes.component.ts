import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-generacion-reportes',
  templateUrl: './generacion-reportes.component.html',
  styleUrls: [
    './generacion-reportes.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class GeneracionReportesComponent implements OnInit {

  public message: String = "Sin Resultados";
  public height: String = "750px";

  constructor(
    private pageService: PageService,
  ) { }

  private tittle: String = 'Generación de Reportes';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }

}
