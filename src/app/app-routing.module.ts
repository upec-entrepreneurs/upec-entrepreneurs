import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './components/events/events.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

const routes: Routes = [
  {
    path: 'events', component: EventsComponent,
    children: [
      { path: 'upcoming', component: EventsComponent },
      { path: 'past', component: EventsComponent },
      { path: '', redirectTo: 'upcoming', pathMatch: 'full' }
    ]
  },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '', redirectTo: '/events/upcoming', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
