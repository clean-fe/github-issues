import {getOptions, customFetch} from "../MyFetch.js";
import {issue} from "../../models/api/URLs.js";

export const getIssue = customFetch(getOptions)(issue.get)
