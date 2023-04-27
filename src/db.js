// TODO: IndexedDB 사용법 익힌 후 수정할 것
export const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
