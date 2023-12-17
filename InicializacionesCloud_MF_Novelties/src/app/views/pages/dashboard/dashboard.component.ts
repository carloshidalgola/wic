import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    '../../shared-component-styles.scss'
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private pageService: PageService,
  ) { }

  private tittle: String = 'Dashboard';

  ngOnInit(): void {
    this.pageService.setHeaderTittle(this.tittle);
  }

}
