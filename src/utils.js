export const compose =
  (...fns) =>
  async arg =>
    fns.reduce(async (prevPromise, fn) => {
      const c = await prevPromise
      return fn(c)
    }, Promise.resolve(arg))

export const filter = condition => arr => arr.filter(condition)

export const render = node => template => (node.innerHTML = template())

export const $ = element => document.querySelector(element)

export const shareParameter =
  (...functions) =>
  param =>
    functions.forEach(func => func(param))
