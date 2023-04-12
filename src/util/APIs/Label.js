import {getOptions, customFetch} from "../../data/repositories/utils/MyFetch.js";
import {label} from "../../models/api/RestAPIs";

export const getLabel = customFetch(getOptions)(label.get)
