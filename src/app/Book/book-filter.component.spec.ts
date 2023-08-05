import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { appRoutes } from '../app.routes';
import { BookFilterComponent } from './book-filter.component';
import { BookListComponent } from './book-list.component';
import { BookService } from './book.service';

describe('BookFilterComponent', () => {
  let fixture: ComponentFixture<BookFilterComponent>;
  let component: BookFilterComponent;
  let bookService: BookService;

  beforeEach(async () => {
    const bookServiceStub = {
      searchFilter$: new BehaviorSubject<any>({
        searchTerm: '',
        languages: [],
      }),
      setSearchTerm: jest.fn(),
      setLanguageFilter: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [BookListComponent],
      providers: [
        provideRouter(appRoutes),
        provideAnimations(),
        { provide: BookService, useValue: bookServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFilterComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BookService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call bookService.setSearchTerm when searchTerm changes', () => {
    const searchTerm = 'test search';
    component.searchTerm.setValue(searchTerm);
    expect(bookService.setSearchTerm).toHaveBeenCalledWith(searchTerm);
  });

  it('should call bookService.setLanguageFilter when language changes', () => {
    const selectedLanguages = ['English', 'French'];
    component.language.setValue(selectedLanguages);
    expect(bookService.setLanguageFilter).toHaveBeenCalledWith(
      selectedLanguages
    );
  });

  //   it('should set the initial values of searchTerm and language from the bookService', () => {
  //     const filterData = { searchTerm: 'initial search', languages: ['English'] };
  //     bookService.searchFilter$.next(filterData);
  //     fixture.detectChanges();

  //     expect(component.searchTerm.value).toBe(filterData.searchTerm);
  //     expect(component.language.value).toEqual(filterData.languages);
  //   });
});
