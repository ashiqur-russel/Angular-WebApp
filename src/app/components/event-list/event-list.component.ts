import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ToastService } from "../../common/toast.service"

declare let toastr: any;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events?: any[];

  constructor(private eventService: EventService, private toastr: ToastService) { }

  ngOnInit(): void {

    this.events = this.eventService.getEvents();
  }

  handleEventClick(eventName: any) {
    console.log("hey here  " + eventName);

    this.toastr.success(eventName);

  }



}
