export const go = (initial,...fns) => fns.reduce((result, func) => func(result), initial);
