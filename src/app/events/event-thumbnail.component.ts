import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  // @Output() eventClick = new EventEmitter()

  // handleClickMe() {
    // this.eventClick.emit(this.event.name);
  // }

  // getStartTimeClass() {
// const isEarlyStart = this.event && this.event.time === '8:00 am'; return { green: isEarlyStart, bold: isEarlyStart }
 // if(this.event && this.event.time === '8:00 am')
 //   return 'green bold'
  // return ''
  // }

  getStartTimeStyle(): any {
    if ( this.event && this.event.time === '8:00 am' )
        return  { color: '#003300', 'font-weight': 'bold' }
    return [];
        }



  constructor() { }

  ngOnInit() {
  }



}
