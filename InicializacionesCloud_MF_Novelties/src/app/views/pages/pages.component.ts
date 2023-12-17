import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarParameters } from 'src/app/model/ComponentsModels/sidebarParameters';
import { SidebarService } from 'src/app/service/sidebarService/sidebar.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'novelties-web-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public sidebarSwitch: boolean = false;
  public sidebarContent: any = null;
  public sidebarParams: SidebarParameters = {
    position: 'end',
    mode: 'over',
    disableClose: false,
  }

  constructor(
    private router: Router,
    private sidebarServ: SidebarService,
  ) {}

  ngOnInit(): void {
    this.initSidebar();
  }

  private initSidebar() {
    this.sidebarServ.sidebarSwitch$.subscribe((data: boolean) => {
      this.sidebarSwitch = data;
    });
    this.sidebarServ.sidebarContent$.subscribe((content: boolean) => {
      this.sidebarContent = content;
    });
    this.sidebarServ.sidebarParams$.subscribe((params: SidebarParameters) => {
      this.sidebarParams = {
        position: params.position,
        mode: params.mode,
        disableClose: params.disableClose,
      };
    });
  }

  public openMainSidebar() {
    this.sidebarServ.setSidebarContent(SidenavComponent);
    this.sidebarServ.setSidebarParams('start');
    this.sidebarServ.openSidebar();
  }
}
