export const getElement = selector => document.querySelector(selector);

export const getElements = selector => {
  const selectEl = document.querySelectorAll(selector);

  return Array.from(selectEl);
};

export const drawHtml = (element, html) => {
  element.innerHTML = html;
};

export const removeClass = (elements, className) => {
  for (const element of elements) {
    element.classList.remove(className);
  }
};

export const addClass = (element, className) => {
  element.classList.add(className);
};
