import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';



import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { EventsComponent } from './events.component';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

const MOCK_EVENTS: Event[] = [{
  title: 'Event title',
  location: 'Event location',
  dateStart: new Date('2019-01-01T00:00:00.000Z'),
  dateEnd: new Date('2019-01-01T01:00:00.000Z'),
  headerImageUrl: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  organiser: {
    name: 'Organiser',
    subtitle: 'Intro',
    imageUrl: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  }
}];

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        NoopAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [ EventsComponent ],
      providers: [
        { provide: EventService, useClass: MockEventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the right title', () => {
    expect(component['getTitle']('/events/upcoming')).toEqual('Évènements à venir');
    expect(component['getTitle']('/events/past')).toEqual('Évènements passés');
    expect(component['getTitle']('')).toEqual('Évènements ');
  });

  it('should get the right row number', () => {
    expect(component['getRows'](2)).toEqual([0]);
    expect(component['getRows'](3)).toEqual([0, 1]);
    expect(component['getRows'](10)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should get events', () => {
    expect(component.events).toEqual(MOCK_EVENTS);
  });
});

class MockEventService {
  getEvents() {
    return of(MOCK_EVENTS);
  }
}
