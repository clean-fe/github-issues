export const pipe = (...functions) => {
  return (args = undefined) => {
    return functions.reduce(async (previousPromise, nextFn) => {
      const arg = await previousPromise
      return await nextFn(arg)
    }, Promise.resolve(args))
  }
}
