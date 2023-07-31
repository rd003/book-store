import { Injectable } from '@angular/core';
import { Book } from '@book-store/shared-models';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { BOOKS_DATA } from '../book.data';

export type SearchFilter = {
  searchTerm?: string;
  languages?: string[];
};

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly books = new BehaviorSubject<Book[]>([]);
  private readonly searchFilter = new BehaviorSubject<SearchFilter>({});
  private readonly books$: Observable<Book[]> = this.books.asObservable();
  searchFilter$ = this.searchFilter.asObservable();

  filteredBooks$ = combineLatest([this.books$, this.searchFilter]).pipe(
    map(([books, searchFilter]) => {
      return books.filter((b) => {
        const searchTerm: string | undefined = searchFilter.searchTerm;
        const languages: string[] | undefined = searchFilter.languages;

        // check if title or author matches the search data
        const titleMatch =
          !searchTerm ||
          b.Title.toLowerCase().includes(searchTerm.toLowerCase());
        const authorMatch =
          !searchTerm ||
          b.Author.toLowerCase().includes(searchTerm.toLowerCase());
        if (!languages || languages.length == 0)
          return titleMatch || authorMatch;

        // check if book's language matches to any of the selected languages.
        const languageMatch = !languages || languages.includes(b.Language);
        return (titleMatch || authorMatch) && languageMatch;
      });
    })
  );

  setSearchTerm(searchTerm: string) {
    var currentFilter = this.searchFilter.value;
    this.searchFilter.next({ ...currentFilter, searchTerm });
  }

  setLanguageFilter(languages?: string[]) {
    var currentFilter = this.searchFilter.value;
    this.searchFilter.next({ ...currentFilter, languages });
  }

  constructor() {
    this.books.next(BOOKS_DATA);
  }
}
