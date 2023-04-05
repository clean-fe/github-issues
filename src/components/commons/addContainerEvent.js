export const CLICK_EVENT = "click";

export const addContainerEvent = (container, behaviour, callback) => {
    if (!(container instanceof HTMLElement)) {
        throw new Error("container must be an HTMLElement");
    }
    if (typeof behaviour !== "string") {
        throw new Error("behaviour must be a string");
    }
    if (typeof callback !== "function") {
        throw new Error("callback must be a function");
    }
    container.addEventListener(behaviour, callback);
}