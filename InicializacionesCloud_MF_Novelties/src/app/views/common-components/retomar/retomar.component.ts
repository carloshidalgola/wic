import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';
import { PendingsService } from 'src/app/service/pendings/pendings.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-retomar',
  templateUrl: './retomar.component.html',
  styleUrls: [
    './retomar.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class RetomarComponent implements OnInit {

  constructor (
    private pageService: PageService,
    public pendingsService: PendingsService,
    public userService: UserService,
  ) { }

  private tittle: String = 'Mis Otras Novedades';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }
}
