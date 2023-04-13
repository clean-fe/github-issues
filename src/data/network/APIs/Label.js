import {getOptions, customFetch} from "../../repositories/utils/MyFetch.js";
import $K from "../../../Constants.js"

export const getLabel = customFetch(getOptions)($K.EndPoints.Label.Get)
