export const getElement = selector => document.querySelector(selector);

export const getElements = selector => document.querySelectorAll(selector);

export const drawHtml = (element, html) => {
  element.innerHTML = html;
};
