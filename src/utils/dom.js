export const $ = (selectorName) => document.querySelector(selectorName);

export const setTpl = (html) => ($dom) => {
  $dom.innerHTML = html;
};
