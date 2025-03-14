import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../event.modal';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(id).subscribe(event => this.event = event);
  }

}
