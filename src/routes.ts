import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list.component';
import { DetailsComponent } from './app/events/event-details/details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Er404Component } from './app/errors/er404.component';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent},
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: DetailsComponent, canActivate: [EventRouteActivatorService] },
  {path: '404', component: Er404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' }

];
