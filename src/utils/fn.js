export const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);
