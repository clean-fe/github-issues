const assignWith = (state) => Object.assign({ state }, { observers: [] });

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
      if (!store[key]) setState({});
      store[key].observers.push(callback);
    };
    const unsubscribe = (callback) => {
      store[key].observers = store[key].observers.filter((observer) => observer !== callback);
    };
    const notify = (newState) => {
      if (!store[key]) return false;
      store[key].observers.forEach((observer) => observer(newState));
    };
    const setState = (newState) => {
      const isExist = Boolean(store[key]);
      store[key] = isExist ? { ...store[key], state: newState } : assignWith(newState);
      console.log(`[store] key: ${key}, store: ${JSON.stringify(store[key])}`);
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
