import { Injectable } from '@angular/core';
import { Book } from '@book-store/shared-models';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { BOOKS_DATA } from '../book.data';

export type SearchFilter = {
  searchTerm?: string;
  language?: string;
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
        const searchTerm = searchFilter.searchTerm;
        const language = searchFilter.language;
        return (
          !searchTerm ||
          b.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.Author.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    })
  );

  setSearchTerm(searchTerm: string) {
    var currentFilter = this.searchFilter.value;
    this.searchFilter.next({ ...currentFilter, searchTerm });
  }

  setLanguageFilter(language: string) {
    var currentFilter = this.searchFilter.value;
    this.searchFilter.next({ ...currentFilter, language });
  }

  constructor() {
    this.books.next(BOOKS_DATA);
  }
}
