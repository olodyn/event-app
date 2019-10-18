import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { DetailsComponent } from './events/event-details/details.component';
import { appRoutes } from '../routes';
import { CreateEventComponent } from './events/create-event.component';
import { Er404Component } from './errors/er404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    DetailsComponent,
    CreateEventComponent,
    Er404Component
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
