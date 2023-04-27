import {getOptions, customFetch, postOptions} from "../../repositories/utils/MyFetch";
import $K from "../../../Constants"

export const getLabel = customFetch(getOptions)($K.EndPoints.Label.GET)
export const postLabel = body => customFetch(postOptions(body))($K.EndPoints.Label.POST)
