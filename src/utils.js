export const $ = (selector) => document.querySelector(selector);

export const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, funs) => funs(arg), args);

export const fetchList = async (url) => {
  const res = await fetch(`${url}`);
  const list = await res.json();

  return list;
};
