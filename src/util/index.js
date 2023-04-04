export const $ = (element) => document.querySelector(element)

export const pipe =
  (...functions) =>
  (value) =>
    functions.reduce((res, func) => func(res), value)

export const pipePromises =
  (...functions) =>
  (value) =>
    functions.reduce((p, fn) => p.then(fn), Promise.resolve(value))

export const shareParameters =
  (...functions) =>
  (param) =>
    functions.forEach((func) => func(param))
