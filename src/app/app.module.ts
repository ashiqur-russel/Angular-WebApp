import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventService } from './services/event.service';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ErrorComponent } from './components/error/error.component';
import { EventRouteService } from './services/event-route.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventComponent,
    EventListComponent,
    NavbarComponent,
    ToastMessageComponent,
    EventDetailsComponent,
    CreateFormComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [EventService, ToastrService, EventRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
