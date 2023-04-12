import {getOptions, customFetch} from "../../data/repositories/utils/MyFetch.js";
import $K from "../../Constants"

export const getIssue = customFetch(getOptions)($K.EndPoints.Issue.Get)
