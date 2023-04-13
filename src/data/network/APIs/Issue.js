import {getOptions, customFetch} from "../../repositories/utils/MyFetch.js";
import $K from "../../../Constants.js"

export const getIssue = customFetch(getOptions)($K.EndPoints.Issue.Get)
