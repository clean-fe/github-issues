import {getOptions, customFetch} from "../../data/repositories/utils/MyFetch.js";
import {issue} from "../../models/api/RestAPIs";

export const getIssue = customFetch(getOptions)(issue.get)
