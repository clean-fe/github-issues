import {getOptions, customFetch} from "../MyFetch";
import {label} from "../../models/api/RestAPIs";

export const getLabel = customFetch(getOptions)(label.get)
