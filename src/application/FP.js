export const pipe = (...funcs) => initValue => funcs.reduce((acc, fn) => fn(acc), initValue)
