import { Injectable, Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteService implements CanActivate {
  @Input() event: any;
  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }



  canActivate(route: ActivatedRouteSnapshot): boolean {


    const eventExist = !!this.eventService.getEvent(+route.params['id'])

    if (eventExist) {
      return true;
    } else {
      this.router.navigate(['error']);
      return false;

    }


  }

}
