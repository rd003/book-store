import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RupeeSymbolPipe } from '@book-store/shared-models';
import { appRoutes } from '../app.routes';
import { mockBooks } from '../utils/mock-books.util';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let fixture: ComponentFixture<BookListComponent>;
  let component: BookListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookListComponent, RupeeSymbolPipe],
      providers: [provideRouter(appRoutes)],
    }).compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should should display the list of books', () => {
    component.books = mockBooks;
    fixture.detectChanges();
    // const bookCard = fixture.nativeElement.querySelectorAll('.book-card');
    // expect(bookCard.length).toBe(mockBooks.length);
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement as HTMLElement;
      const bookCards = compiled.querySelectorAll('.book-card');
      expect(bookCards.length).toBe(mockBooks.length);
      // expect(bookCards[0].querySelector('.title')?.textContent).toContain(
      //   mockBooks[0].Title
      // );
    });
  });
});
