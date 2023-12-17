import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public title: String | null = null;

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {}

  ngOnInit(): void {
    this.pageService.headerTittle$.subscribe(tittle => {
      this.title = tittle;
    });
  }

  public goGome() {
    this.router.navigateByUrl('/dashboard');
  }
}
