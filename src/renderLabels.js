import { fetchAPI, promisePipe } from "./utils.js";
const LABEL_URL = "./data-sources/labels.json";

export const renderLabel = () => promisePipe(fetchAPI)(LABEL_URL);
