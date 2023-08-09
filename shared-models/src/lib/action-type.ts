type ActionType = 'add' | 'update' | 'delete';
export interface Action<T> {
  item: T;
  action: ActionType;
}
