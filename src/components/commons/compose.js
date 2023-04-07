export const compose = (...fns) => async initialArg => {
    if (!Array.isArray(fns)) {
        throw new Error("fns must be an array");
    }
    fns.reduce(async(prev, fn) => {
        const result = await prev;
        return fn(result);
    }, Promise.resolve(initialArg));
}