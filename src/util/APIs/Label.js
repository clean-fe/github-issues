import {getOptions, customFetch} from "../../data/repositories/utils/MyFetch.js";
import $K from "../../Constants"

export const getLabel = customFetch(getOptions)($K.EndPoints.Label.Get)
