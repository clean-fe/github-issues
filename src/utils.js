export const $ = (selector) => document.querySelector(selector);

export const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

export const fetchList = async (url) => {
  const res = await fetch(`${url}`);
  const listRes = await res.json();

  return listRes;
};
