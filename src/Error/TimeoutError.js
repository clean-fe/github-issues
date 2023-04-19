export class TimeoutError extends Error {
  constructor(request) {
    super('fetch request time out');
    Object.defineProperty(this, 'request', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    this.name = 'Timeout Error';
    this.code = 408;
    this.request = request;
  }
}
