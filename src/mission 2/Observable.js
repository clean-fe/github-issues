class Observable {
  constructor() {
    this.observers = new Set();
  }
  subscribe(observer) {
    this.observers.add(observer);
  }
  unsubscribe(observer) {
    this.observers = [...this.observers].filter((subscriber) => subscriber !== observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
