import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@book-store/shared-models';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { BOOKS_DATA } from '../book.data';

export interface SearchFilter {
  searchTerm?: string;
  languages?: string[];
}

export type QueryParam = {
  searchTerm?: string;
  languages?: string;
};

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly books = new BehaviorSubject<Book[]>([]);
  private readonly searchFilter = new BehaviorSubject<SearchFilter>({});
  private readonly books$: Observable<Book[]> = this.books.asObservable();
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  searchFilter$ = this.searchFilter.asObservable().pipe(
    tap((sFilter) => {
      /* 
       whenever user enter filters, they will be added to url.
       e.g. '/books?searchTerm=tale&languages=english,spanis 
       */
      const queryParams: QueryParam = {};
      if (sFilter.searchTerm) {
        queryParams.searchTerm = sFilter.searchTerm;
      }
      if (sFilter.languages && sFilter.languages.length > 0) {
        const selectedLanguages = sFilter.languages.join(',');
        queryParams.languages = selectedLanguages;
      }
      this._router.navigate([], { queryParams, replaceUrl: true });
    })
  );

  filteredBooks$ = combineLatest([this.books$, this.searchFilter$]).pipe(
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

    this._route.queryParamMap
      .pipe(
        tap((queryParamMap) => {
          const searchTerm = queryParamMap.get('searchTerm') || '';
          const languages = queryParamMap.get('languages') || '';
          if (searchTerm) {
            this.setSearchTerm(searchTerm);
          }
          if (languages && languages.length > 0) {
            const langArray = languages.split(',');
            this.setLanguageFilter(langArray);
          }
        })
      )
      .subscribe();
  }
}
