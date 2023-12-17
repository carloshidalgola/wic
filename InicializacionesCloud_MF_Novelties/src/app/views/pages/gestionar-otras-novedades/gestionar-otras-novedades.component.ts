import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PageService } from 'src/app/service/page.service';
import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gestionar-otras-novedades',
  templateUrl: './gestionar-otras-novedades.component.html',
  styleUrls: [
    './gestionar-otras-novedades.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class GestionarOtrasNovedadesComponent implements OnInit {
  public opened: boolean = false;
  pendings: number = 0;
  IdNovelties: number = 0;
  NroTicket: string = '';
  IdCommerce: string = '';
  consultType: string = '';
  consultId: string = '';
  Date: string = '';
  id:string = '';

  message: String = 'No tienes ninguna consulta de tickets';
  height: String = '450px';

  constructor(
    private pageService: PageService,
    public pendingsService: PendingsService, public userService: UserService, 
    private _snackBar: MatSnackBar,
    private route: Router,
  ) { }

  private tittle: String = 'Mis Otras Novedades';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
    this.userPendingApi()
  }

  public openSideBar() {
    this.opened = true;
  }

  public closeSideBar() {
    this.opened = false;
  }

  private userPendingApi(){
    this.pendingsService.getOtherNoveltiesPendings().subscribe((data: any) => {
      if (data.length != 0) {
        this.pendings = 1;
          this.IdNovelties = data[0].noveltyId
          this.NroTicket = data[0].ticketId
          this.IdCommerce = data[0].comerceId
          this.consultType = data[0].consultType
          this.consultId = data[0].consultId
          this.Date = data[0].date
          this.id = data[0].id;
      }else{
        this.pendings = 0;
      }
    });
  }

  public getFormNoveltySearchNovelties() {
   alert("=======>")
    this.userService.isEnabledToSearch().subscribe((response: any) => {
      console.log(response)
      if (response.isEnableToSearch) {
        this.getFormNoveltySearchOtherNovelties()
      } else {
        // TODO: Change the next line to correct functions that shows message
        this.callSnackBar()
      }
    });
  }

  public getFormNoveltySearchOtherNovelties() {
    console.log("===========>INIT");
    this.userService.isEnabledToSearchOtherNovelties().subscribe((response: any) => {
      console.log(response)
      if (response.isEnableToSearch) {
        this.openSideBar()
      } else {
        // TODO: Change the next line to correct functions that shows message
        this.callSnackBar()
      }
    });
  }


  private callSnackBar() {
    this._snackBar.open(
      'Finaliza tus novedades pendientes para crear una nueva.',
      'Entendido',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-class'],
        duration: 3000
      });
  }

  public goReturn(){
    this.route.navigateByUrl('/gestionar-otras-novedades/config-novelties/' + this.id);
  }


}
