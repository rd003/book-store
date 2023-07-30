import { Injectable } from '@angular/core';
import { Book } from '@book-store/shared-models';
import { BehaviorSubject, Observable } from 'rxjs';
import { BOOKS_DATA } from '../book.data';

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly books = new BehaviorSubject<Book[]>([]);

  books$: Observable<Book[]> = this.books.asObservable();

  constructor() {
    console.log(BOOKS_DATA);
    this.books.next(BOOKS_DATA);
  }
}
