import { Book } from '@book-store/shared-models';

export interface Cart {}

export interface CartItem {
  book: Book;
  quantity: number;
}
