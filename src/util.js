export const go = (initial,...fns) => fns.reduce((result, func) => func(result), initial);

export const pipe = (...fns) => (initialValue) => fns.reduce((returnedValue, fn) => fn(returnedValue), initialValue);
