export const $ = (selector) => document.querySelector(selector);

export const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, func) => func(arg), args);

export const promisePipe =
  (...functions) =>
  async (args) =>
    functions.reduce(
      async (arg, func) => func(await arg),
      Promise.resolve(args)
    );

export const fetchList = async (url) => {
  const res = await fetch(`${url}`);
  const list = await res.json();

  return list;
};

export const shareParams =
  (...functions) =>
  (param) =>
    functions.forEach((func) => func(param));
