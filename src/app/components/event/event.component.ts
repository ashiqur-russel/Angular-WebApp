import { EventService } from 'src/app/services/event.service';
import { Component, OnInit, Input, Output, } from '@angular/core';
import { IEvent } from 'src/app/user/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

}
