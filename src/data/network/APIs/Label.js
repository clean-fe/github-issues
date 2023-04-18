import {getOptions, customFetch} from "../../repositories/utils/MyFetch";
import $K from "../../../Constants"

export const getLabel = customFetch(getOptions)($K.EndPoints.Label.Get)
