export const fetchJSON = async url => {
    if (typeof url !== "string") {
        throw new Error("url must be a string");
    }
    const response = await fetch(url);
    return await response.json();
}