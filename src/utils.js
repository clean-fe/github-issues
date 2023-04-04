// is not a function 에러가 떠서 어떻게 넘겨줘야할지 고민이다
export const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

export const renderList = async (url, callback) => {
  const fetchedList = await fetch(`${url}`).then((res) => res.json());

  callback(fetchedList);
};
