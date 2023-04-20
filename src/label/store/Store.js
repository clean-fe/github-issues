const assignWith = (state) => {
  const observers = new Set();
  return {
    state,
    observers,
  };
};

const Store = () => {
  const store = {};

  /**
   * @param {string} key
   * @returns {object} { getState, setState, subscribe, unsubscribe }
   */
  return (key) => {
    const getState = () => {
      if (!store[key]) return false;
      return store[key].state;
    };
    const subscribe = (callback) => {
      if (!store[key]) return false;
      store[key].observers.add(callback);
    };
    const unsubscribe = (callback) => {
      if (!store[key]) return false;
      store[key].observers = store[key].observers.delete(callback);
    };
    const notify = (newState) => {
      if (!store[key]) return false;
      store[key].observers.forEach((observer) => observer(newState));
    };
    const setState = (newState) => {
      if (!store[key]) {
        store[key] = assignWith(newState);
        return;
      }
      store[key] = { ...store[key], state: newState };
      notify(newState);
    };

    return {
      getState,
      setState,
      subscribe,
      unsubscribe,
    };
  };
};

export default Store();
