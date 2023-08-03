import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../app.routes';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter(appRoutes)],
    });

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('shoud create', () => {
    expect(component).toBeTruthy();
  });
});
