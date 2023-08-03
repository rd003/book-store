import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appRoutes } from 'src/app/app.routes';
import { HeroComponent } from './hero.component';

describe('Hero Component', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let component: HeroComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideRouter(appRoutes)],
    });
    fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain element hero-section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-section')).toBeTruthy();
  });

  it('should contain element hero-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-content')).toBeTruthy();
  });
});
