import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {ToastrService} from '../common/toastr.service';


@Component({
 // selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[] ;

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
  // handleEventClicked(data){
    // console.log('received',data)
  // }

  constructor(private eventService: EventService, private toastr: ToastrService) {
      this.events = this.eventService.getEvents() ;
   }

  ngOnInit() {
  }

}
