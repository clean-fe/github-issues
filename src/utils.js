import { Observable } from "./Observable.js";

export function filterItems(filterer) {
  return (items) => items.filter(filterer);
}

export function renderItems(renderer) {
  return (items) => items.map(renderer);
}

export function updateDOM(target) {
  return (template) => {
    document.querySelector(target).innerHTML = template;
  };
}

export function pipe(...functions) {
  return (initArg) =>
    functions.reduce(
      async (nextArg, nextFunction) => nextFunction(await nextArg),
      initArg
    );
}

export function fromEvent(target, eventName) {
  return new Observable((observer) => {
    target.addEventListener(eventName, observer);
  });
}
