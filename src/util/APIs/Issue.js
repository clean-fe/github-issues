import {getOptions, customFetch} from "../MyFetch";
import {issue} from "../../models/api/RestAPIs";

export const getIssue = customFetch(getOptions)(issue.get)
