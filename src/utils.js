export function pipe(...functions) {
  return function (args) {
    functions.reduce((promiseArg, nextFn) => promiseArg.then(nextFn), Promise.resolve(args));
  };
}

export function shareToChild(...functions) {
  return function (args) {
    functions.forEach((func) => func(args));
  };
}
