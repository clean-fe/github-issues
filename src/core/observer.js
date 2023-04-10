let currentObserver = null;

export const observe = (fn) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = (store) => {
  Object.keys(store).forEach((key) => {
    let val = store[key];
    const observers = new Set();

    Object.defineProperty(store, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return val;
      },
      set(nextVal) {
        val = nextVal;
        observers.forEach((fn) => fn());
      },
    });
  });
  return store;
};
