import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { NoveltiesComponent } from './novelties.component';
import { PendingsComponent } from './pendings/pendings.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchFirstStepComponent } from './search-first-step/search-first-step.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { ConsultTicketsComponent } from './consult-tickets/consult-tickets.component';



const routes: Routes = [
  { path: '', component: NoveltiesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload-image', component: UploadImageComponent },
  { path: 'pendings', component: PendingsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-first-step', component: SearchFirstStepComponent },
  { path: 'pendings/:id', component: RegisterComponent },
  { path: 'search-ticket', component: SearchTicketComponent },
  { path: 'consult-ticket', component: ConsultTicketsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoveltiesRoutingModule { }
