const mapper = (state) => Object.assign(state, { observers: [] });

const Store = () => {
  const store = {
    labelList: mapper([]),
    newLabel: mapper({}),
    isNewLabelClicked: mapper(false),
  };

  const getState = (key) => {
    if (!store[key]) return false;
    return store[key].state;
  };
  const subscribe = (key, callback) => {
    if (!store[key]) return false;
    store[key].observers.push(callback);
  };
  const unsubscribe = (key, callback) => {
    if (!store[key]) return false;
    store[key].observers = store[key].observers.filter((observer) => observer !== callback);
  };
  const notify = (key, newState) => {
    if (!store[key]) return false;
    store[key].observers.forEach((observer) => observer(newState));
  };
  const setState = (key, newState) => {
    store[key] = {
      ...store[key],
      state: newState,
    };
    notify(key, store[key]);
  };

  return {
    getState,
    setState,
    subscribe,
    unsubscribe,
  };
};

export default Store();
