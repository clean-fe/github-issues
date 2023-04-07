export const shareParams = (...fns) => {
    if (fns.length === 0) {
        throw new Error("func must be a function");
    }
    return ((param) => {
        fns.forEach(fn => fn(param));
    })
}