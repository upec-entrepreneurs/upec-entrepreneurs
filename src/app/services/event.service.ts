import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = 'https://upec-events-api.azurewebsites.net';

  constructor( private _http: HttpClient ) { }

  public getUpcomingEvents() {
    return this._http.get(this.url + '/upcoming-events.json');
  }

  public getPastEvents() {
    return this._http.get(this.url + '/past-events.json');
  }

}
