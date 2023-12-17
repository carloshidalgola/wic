import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';
import { SidebarService } from 'src/app/service/sidebarService/sidebar.service';
import { SearchComponent } from '../components/sidebar-search-novelty/search.component';

@Component({
  selector: 'app-gestionar-novedades',
  templateUrl: './gestionar-novedades.component.html',
  styleUrls: [
    './gestionar-novedades.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class GestionarNovedadesComponent implements OnInit {

  public message: String = "Sin Resultados";
  public height: String = "425px";

  constructor(
    private pageService: PageService,
    private sidebarServ: SidebarService,
  ) { }

  private tittle: String = 'Gestionar Novedades';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }

  public openSideBar() {
    this.sidebarServ.setSidebarContent(SearchComponent);
    this.sidebarServ.setSidebarParams('end');
    this.sidebarServ.openSidebar();
  }
}
