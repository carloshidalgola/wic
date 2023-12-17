import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { UsuarioService } from 'src/app/service/usuario-service';
import { UserService } from "../../../../service/user.service";
import { Pending } from "src/app/model/pending";
import { CommerceService } from 'src/app/service/commerce.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html',
  styleUrls: ['./pendings.component.scss']
})

export class PendingsComponent implements OnInit {

  pendings: number = 0
  IdNovelties: number = 0
  NroTicket: string = ''
  IdCommerce: string = ''
  consultType: string = ''
  consultId: string = ''
  Date: string = ''
  dataPendingUser: any[] = []
  dataPending: any[] = []

  IdComercio: string = ''
  Fecha: string = ''

  public opened: boolean = false;

  constructor(
    private pendingsService: PendingsService,
    private route: Router,
    private userService: UserService,
    private commerceService: CommerceService,
  ) {}

  ngOnInit(): void {
    this.pendings = 0;

    this.userPendingApi();
  }

  private userPendingApi(){
    var idUser = "3333"; //ID DEL USUARIO
    var statusPending = "PENDING"; // El estado 3 es novedad pendiente
    this.pendingsService.getPendings().subscribe((data: any) => {
      if (data.length != 0) {
        this.dataPendingUser = data.filter((data: any) => data.userId.id === idUser)
        this.dataPending = data.filter((data: any) => data.status === statusPending)
        if (this.dataPending.length == 1) {
          this.pendings = 1;
          this.IdNovelties = this.dataPending[0].noveltyId
          this.NroTicket = this.dataPending[0].ticketId
          this.IdCommerce = this.dataPending[0].comerceId
          this.consultType = this.dataPending[0].consultType
          this.consultId = this.dataPending[0].consultId
          this.Date = this.dataPending[0].date

          //this.Date = this.dataPending[0].created_at
        }else{
          this.pendings = 0;
        }
      }else{
        this.pendings = 0;
      }

      // Save Pending in State
      this.pendingsService.pendings$ = data[0];
    });
  }

 

  public getFormNoveltySearch() {
    this.userService.isEnabledToSearch().subscribe((response: any) => {
      console.log(response)
      if (response.isEnableToSearch) {
        this.openSideBar()
      } else {
        // TODO: Change the next line to correct functions that shows message
        alert("Finaliza tus novedades pendientes para crear una nueva.")
      }
    });
  }

  public openSideBar() {
    this.opened = true;
  }

  public closeSideBar() {
    this.opened = false;
  }

  public goImagenes() {
    this.consult();
    this.route.navigateByUrl('/novelties/pendings/' + this.IdNovelties);
  }

  public consult() {
    const consult = this.consultType;
    const code = this.consultId;

    this.commerceService.getCommerceData(consult, code).subscribe();
  }

  public goConsultNovelties() {
    this.route.navigateByUrl('/novelties/pendings');
  }

  public goConsultTickets() {
    this.route.navigateByUrl('/novelties/consult-ticket');
  }
}
