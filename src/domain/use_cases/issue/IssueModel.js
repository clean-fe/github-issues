import {getIssue} from "../../../data/network/APIEndpoints";

export default class IssueModel {
  constructor(delegate) {
    this.delegate = delegate
  }

  fetchGetIssue() {
    return getIssue()
  }

}
