export default class Observable {
  constructor() {
    this.observers = new Map();
  }

  subscribe(key, closure) {
    this.observers.set(key, closure);
  }

  unsubscribe(key) {
    this.observers.delete(key);
  }

  notify(key, data) {
    const closure = this.observers.get(key)
    if (closure) closure(data)
  }

  notifyAll(data) {
    this.observers.forEach(closure => closure(data));
  }
}
