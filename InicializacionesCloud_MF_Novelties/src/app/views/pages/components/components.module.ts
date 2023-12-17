import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialAngularModule } from '../material-angular.module';
import { SearchTicketComponent } from './sidebar-search-ticket/search-ticket.component';
import { SearchComponent } from './sidebar-search-novelty/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchTicketComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchTicketComponent,
    SearchComponent
  ],
})
export class PagesComponentsModule {}
