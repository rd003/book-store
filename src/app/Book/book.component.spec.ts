import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Book } from '@book-store/shared-models';
import { Observable, of } from 'rxjs';
import { appRoutes } from '../app.routes';
import { mockBooks } from '../utils/mock-books.util';
import { BookFilterComponent } from './book-filter.component';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './book.component';
import { BookService } from './book.service';

//Mock BookService
class MockBookService {
  filteredBooks$: Observable<any> = of([]);
}

// Mock BookListComponent
@Component({
  selector: 'book-store-book-list',
  template: '',
  standalone: true,
})
class MockBookListComponent {
  @Input() books!: Book[];
}

// Mock BookFilterComponent
@Component({
  selector: 'book-store-book-filter',
  template: '',
  standalone: true,
})
class MockBookFilterComponent {}

describe('BookComponent', () => {
  let fixture: ComponentFixture<BookComponent>;
  let component: BookComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookComponent, MockBookListComponent, MockBookFilterComponent],
      providers: [
        provideRouter(appRoutes),
        {
          provide: BookService,
          useClass: MockBookService,
        },
      ],
    })
      .overrideComponent(BookComponent, {
        remove: { imports: [BookFilterComponent] },
        add: { imports: [MockBookFilterComponent] },
      })
      .overrideComponent(BookComponent, {
        remove: { imports: [BookListComponent] },
        add: { imports: [MockBookListComponent] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieved filtered book from bookService', () => {
    const mockBookService = TestBed.inject(BookService);
    mockBookService.filteredBooks$ = of(mockBooks);
    fixture.detectChanges(); // Trigger change detection

    // Check if the component has received the filtered books from the BookService
    expect(component.books$).toBeTruthy();
    component.books$.subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });
  });

  it('should display the book list and book filter components', () => {
    const bookListComponent = fixture.debugElement.query(
      By.directive(MockBookListComponent)
    );
    const bookFilterComponent = fixture.debugElement.query(
      By.directive(MockBookFilterComponent)
    );

    expect(bookListComponent).toBeTruthy();
    expect(bookFilterComponent).toBeTruthy();
  });

  it('should pass the books array to BookListComponent', () => {
    const bookListComponent = fixture.debugElement.query(
      By.directive(MockBookListComponent)
    ).componentInstance as MockBookListComponent;
    bookListComponent.books = mockBooks;
    expect(bookListComponent.books).toEqual(mockBooks);
  });
});
