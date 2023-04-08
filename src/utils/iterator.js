export const reduce = (func, accumulate, iterable) => {
  if (!iterable) {
    iterable = accumulate[Symbol.iterator]();
    accumulate = iterable.next().value;
  }

  for (const props of iterable) {
    accumulate = func(accumlate, props);
  }

  return accumulate;
};

export const filter = (func, iterable) => {
  const resolve = [];

  for (const props of iterable) {
    if (func(props)) resolve.push(props);
  }

  return resolve;
};
