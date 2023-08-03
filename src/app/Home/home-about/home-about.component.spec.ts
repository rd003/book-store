import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appRoutes } from 'src/app/app.routes';
import { HomeAboutComponent } from './home-about.component';

describe('HomeAboutComponent💩', () => {
  let fixture: ComponentFixture<HomeAboutComponent>;
  let component: HomeAboutComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeAboutComponent],
      providers: [provideRouter(appRoutes)],
    });

    fixture = TestBed.createComponent(HomeAboutComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain element about-us-section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.about-us-section')).toBeTruthy();
  });
  it('should contain element about-us-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.about-us-content')).toBeTruthy();
  });
});
