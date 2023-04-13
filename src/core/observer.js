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

export const create = (createState) => {
  let state;
  const observers = new Set();

  const getState = () => state;

  const shallowCopy = (state, nextState) => Object.assign({}, state, nextState);
  const setState = (partial, replace) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : shallowCopy(state, nextState);
      observers.forEach((listener) => listener(state, previousState));
    }
  };

  const subscribeWithSelector = (
    listener,
    selector = getState,
    equalityFn = Object.is,
  ) => {
    let currentSlice = selector(state);

    const listenerToAdd = () => {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener((currentSlice = nextSlice), previousSlice);
      }
    };
    observers.add(listenerToAdd);
    return () => observers.delete(listenerToAdd);
  };

  const subscribe = (observer, selector) => {
    if (selector) {
      return subscribeWithSelector(observer, selector);
    }
    observers.add(observer);
    return () => observers.delete(observer);
  };

  state = createState(setState, getState, { setState, subscribe });

  return { setState, subscribe, getState, ...state };
};
