export const compose =
  (...fns) =>
  async arg =>
    fns.reduce(async (prevPromise, fn) => {
      const c = await prevPromise
      return fn(c)
    }, Promise.resolve(arg))

export const filter = condition => arr => arr.filter(condition)

export const render = node => template => (node.innerHTML = template())

export const fetchData = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
