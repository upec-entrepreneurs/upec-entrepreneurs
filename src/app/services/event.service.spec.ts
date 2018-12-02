import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EventService } from './event.service';

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
});
