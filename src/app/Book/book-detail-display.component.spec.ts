import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../app.routes';
import { BookDetailDisplayComponent } from './book-detail-display.component';

describe('BookDetailDisplayComponent', () => {
  let component: BookDetailDisplayComponent;
  let fixture: ComponentFixture<BookDetailDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailDisplayComponent],
      providers: [provideRouter(appRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
