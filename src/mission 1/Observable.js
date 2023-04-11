export class Observable {
  constructor(subscribe) {
    this.subscribe = subscribe;
  }

  pipe(functions) {
    pipe(functions)();
    return this;
  }

  subscribe(observer) {
    return this.subscribe(observer);
  }
}
