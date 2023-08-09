import { Injectable } from '@angular/core';
import { Action, Book } from '@book-store/shared-models';
import {
  Subject,
  combineLatest,
  distinctUntilChanged,
  map,
  scan,
  shareReplay,
} from 'rxjs';
import { CartItem } from './cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemSubject = new Subject<Action<CartItem>>();
  private itemAction$ = this.itemSubject.asObservable();

  cartItems$ = this.itemAction$.pipe(
    scan(
      (items, itemAction) => this.modifyCart(items, itemAction),
      [] as CartItem[]
    ),
    distinctUntilChanged(),
    shareReplay(1)
  );

  totalItems$ = this.cartItems$.pipe(map((items) => items.length));

  subTotal$ = this.cartItems$.pipe(
    map((a) => a.reduce((a, b) => a + b.quantity * b.book.Price, 0))
  );

  deliveryCharge$ = this.subTotal$.pipe(
    map((a) => (a > 0 && a < 500 ? 50 : 0))
  );

  tax$ = this.subTotal$.pipe(map((a) => Math.round(a * 9.25) / 100));

  total$ = combineLatest([
    this.subTotal$,
    this.deliveryCharge$,
    this.tax$,
  ]).pipe(map(([s, d, t]) => s + d + t));

  //cart actions

  addItem(item: CartItem) {
    this.itemSubject.next({
      item,
      action: 'add',
    });
  }

  removeItem(book: Book) {
    this.itemSubject.next({
      item: { book, quantity: 0 },
      action: 'delete',
    });
  }

  updateItem(item: CartItem) {
    this.itemSubject.next({
      item,
      action: 'update',
    });
  }

  // modify cart

  private modifyCart(
    items: CartItem[],
    operation: Action<CartItem>
  ): CartItem[] {
    if (operation.action === 'add') {
      return this.addCart(items, operation.item);
    } else if (operation.action === 'update') {
      return this.updateCart(items, operation.item);
    } else if (operation.action === 'delete') {
      return this.removeCart(items, operation.item);
    }

    return [...items];
  }

  private addCart(items: CartItem[], itemToBeAdded: CartItem): CartItem[] {
    //check if item exists in cart
    var existingItem = items.find((a) => a.book.Id === itemToBeAdded.book.Id);
    if (existingItem) {
      //if so, increment quantity
      existingItem.quantity += 1;
      return items.map((item) =>
        item.book.Id === existingItem?.book.Id ? existingItem : item
      );
    } else {
      //otherwise, add item to cartItems
      return [...items, itemToBeAdded];
    }
  }

  private updateCart(items: CartItem[], itemToBeUpdated: CartItem): CartItem[] {
    return items.map((item) =>
      item.book.Id === itemToBeUpdated.book.Id ? itemToBeUpdated : item
    );
  }

  private removeCart(items: CartItem[], itemToBeDeleted: CartItem) {
    return items.filter((item) => item.book.Id !== itemToBeDeleted.book.Id);
  }
}
