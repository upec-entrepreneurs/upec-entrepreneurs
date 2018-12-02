import { LOCALE_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { EventItemComponent } from './event-item.component';
import { By } from '@angular/platform-browser';

const MOCK_EVENT = {
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
};

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
      ],
      declarations: [ EventItemComponent ],
      providers: [{ provide: LOCALE_ID, useValue: 'fr' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    component.event = MOCK_EVENT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind input event', () => {
    expect(fixture.debugElement.query(By.css('img')).nativeElement.src).toEqual(MOCK_EVENT.headerImageUrl);
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerHTML).toContain(MOCK_EVENT.title);
    expect(fixture.debugElement.query(By.css('.event-location')).nativeElement.innerHTML).toContain(MOCK_EVENT.location);
  });
});
