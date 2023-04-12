export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    const later = () => {
      timer = null;
      fn(...args);
    };
    clearTimeout(timer);
    timer = setTimeout(later, delay);
  };
};
