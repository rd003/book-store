import { Book } from '@book-store/shared-models';

export interface CartItem {
  book: Book;
  quantity: number;
}
