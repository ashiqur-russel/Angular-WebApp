import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ErrorComponent } from './components/error/error.component';

import { EventRouteService } from './services/event-route.service';

const routes: Routes = [
  { path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: 'event', component: EventListComponent },
  { path: 'event/:id', component: EventDetailsComponent, canActivate: [EventRouteService] },
  { path: 'city', component: CardComponent },
  { path: 'create-form', component: CreateFormComponent },
  //Wild Card Route for 404 request
  {
    path: '**', pathMatch: 'full',
    component: ErrorComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
