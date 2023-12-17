import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-consult-tickets',
  templateUrl: './consult-tickets.component.html',
  styleUrls: ['./consult-tickets.component.scss']
})
export class ConsultTicketsComponent implements OnInit {

  constructor(
    private route: Router,
    private pageService: PageService,
  ) { }

  private tittle: String = 'Consulta de Tickets';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }

  public opened:boolean = false;

  public openSideBar() {
    this.opened = true;
  }

  public closeSideBar() {
    this.opened = false;
  }

  public goConsultNovelties() {
    this.route.navigateByUrl('/novelties/pendings');
  }

  public goConsultTickets() {
    this.route.navigateByUrl('/novelties/consult-ticket');
  }
}
