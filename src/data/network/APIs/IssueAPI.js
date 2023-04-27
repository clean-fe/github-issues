import {getOptions, customFetch} from "../../repositories/utils/MyFetch";
import $K from "../../../Constants"

export const getIssue = customFetch(getOptions)($K.EndPoints.Issue.GET)
