import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private _http: HttpClient ) { }

  public getEvents() {
    return this._http.get('assets/upcoming-events.json');
  }

}
