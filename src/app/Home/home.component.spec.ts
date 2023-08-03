import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../app.routes';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter(appRoutes)],
    });

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have element book-store-home-about', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('book-store-home-about')).toBeTruthy();
  });

  it('should have element book-store-hero', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('book-store-hero')).toBeTruthy();
  });
});
