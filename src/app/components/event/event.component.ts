import { EventService } from 'src/app/services/event.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  @Output() eventDetails = new EventEmitter();

  currentEvent: any = '';
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

}
