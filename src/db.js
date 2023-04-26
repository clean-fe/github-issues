// TODO: IndexedDB 사용법 익힌 후 수정할 것
export const saveLocalStorage = (data) => {
  localStorage.setItem('labels', JSON.stringify(data));
};
