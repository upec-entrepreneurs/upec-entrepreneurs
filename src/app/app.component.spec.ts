import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        LayoutModule,
        MatBadgeModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UPEC Entrepreneurs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('.sidenav-content mat-toolbar span')).nativeElement.innerHTML).toContain('UPEC Entrepreneurs');
  });

  it('should render UPEC logo image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('.sidenav-image')).nativeElement.src;
    expect(imgElement).toContain('assets/upec-logo.svg');
  });
});
