export const $ = (element) => document.querySelector(element)

export const pipe =
  (...functions) =>
  (value) => {
    return functions.reduce((res, func) => {
      return func(res)
    }, value)
  }

export const pipePromises =
  (...functions) =>
  (x) =>
    functions.reduce((p, fn) => p.then(fn), Promise.resolve(x))

export const shareParameters =
  (...functions) =>
  (param) =>
    functions.forEach((func) => func(param))
