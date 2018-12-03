import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Event } from '../models/event.model';
import { EventService } from './event.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

const MOCK_EVENTS: Event[] = [{
  title: 'Event title',
  location: 'Event location',
  dateStart: new Date('2019-01-01T00:00:00.000Z'),
  dateEnd: new Date('2019-01-01T01:00:00.000Z'),
  headerImageUrl: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  ticketsUrl: 'https://www.google.fr/',
  organiser: {
    name: 'Organiser',
    subtitle: 'Intro',
    imageUrl: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  }
}];

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get upcoming events', inject([HttpTestingController, EventService],
      (httpMock: HttpTestingController, dataService: EventService) => {
        dataService.getUpcomingEvents().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(MOCK_EVENTS);
          }
        });
        const mockReq = httpMock.expectOne(dataService.url + '/upcoming-events.json');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(MOCK_EVENTS);
        httpMock.verify();
      }
    )
  );
});
