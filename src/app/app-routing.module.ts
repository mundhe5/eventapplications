import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event/:id', component:EventDetailsComponent },
  { path: 'create-event', component: EventFormComponent },
  { path: 'edit-event/:id', component: EventFormComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
