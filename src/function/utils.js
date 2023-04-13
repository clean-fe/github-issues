export const pipe = (...functions) => {
  return function (args) {
    functions.reduce((promiseArg, nextFn) => promiseArg.then(nextFn), Promise.resolve(args));
  };
};

export const shareToChild = (...functions) => {
  return function (args) {
    functions.forEach((func) => func(args));
  };
};

export const renderTemplate = (selector) => {
  return (template) => {
    document.querySelector(selector).innerHTML = template;
  };
};
