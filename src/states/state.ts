// listeners for state
export type ListenerFn<T> = (items: T[]) => void;

// base state class
export abstract class State<T> {
  protected listeners: ListenerFn<T>[] = [];

  addListeners(listener: ListenerFn<T>) {
    this.listeners.push(listener);
  }

  abstract callListener(items?: any): void;
}
