import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../../event.modal';
;

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  event: Event = { id: 0, title: '', date: '', location: '', description: '' };
  isEdit: boolean = false;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.eventService.getEvent(Number(id)).subscribe(event => {
        if (event) {
          this.event = event;
        }
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEdit) {
        this.eventService.updateEvent(this.event);
      } else {
        this.eventService.addEvent(this.event);
      }
      this.router.navigate(['/events']);
    }
  }

}
