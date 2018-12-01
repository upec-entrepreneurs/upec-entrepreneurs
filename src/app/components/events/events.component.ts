import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  title: string;

  constructor( private _router: Router ) {
    this._router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.title = this.getTitle(this._router.url);
        }
    });
  }

  ngOnInit() {
  }

  private getTitle(url: string): string {
    let title = 'Évènements ';
    switch (url) {
      case '/events/upcoming':
        return title += 'à venir';
      case '/events/past':
        return title += 'passés';
      default:
        return title;
    }
  }

}
