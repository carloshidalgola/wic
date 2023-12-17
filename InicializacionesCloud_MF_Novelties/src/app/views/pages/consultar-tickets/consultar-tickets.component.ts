import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';
import { PagesComponent } from '../pages.component';
import { SidebarService } from 'src/app/service/sidebarService/sidebar.service';
import { SearchTicketComponent } from '../components/sidebar-search-ticket/search-ticket.component';

@Component({
  selector: 'app-consultar-tickets',
  templateUrl: './consultar-tickets.component.html',
  styleUrls: [
    './consultar-tickets.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class ConsultarTicketsComponent implements OnInit {

  public message: String = "No tienes ninguna consulta de tickets";
  public height: String = "425px";

  constructor(
    private pageService: PageService,
    private sidebarServ: SidebarService,
  ) { }

  private tittle: String = 'Consulta de Tickets';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }

  public openSideBar() {
    this.sidebarServ.setSidebarContent(SearchTicketComponent);
    this.sidebarServ.setSidebarParams('end');
    this.sidebarServ.openSidebar();
  }
}
