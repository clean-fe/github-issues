export const pipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce((previousResult, currentFn) => {
      return currentFn(arg)
    }, initialValue)
  }
}

export const asyncPipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce(async (previousPromiseResult, currentFn) => {
      return currentFn(await previousPromiseResult)
    }, Promise.resolve(initialValue))
  }
}
