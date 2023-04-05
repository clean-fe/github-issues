export const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

export const go = (a, ...fns) => fns.reduce((acc, fn) => fn(acc), a);
