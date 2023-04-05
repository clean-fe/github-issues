export const filter = (condition) => {
    if (typeof condition !== "function") {
        throw new Error("condition must be a function");
    }
    return (data => {
        if (!Array.isArray(data)) {
            throw new Error("data must be an array");
        }
        return data.filter(condition);
    });
}