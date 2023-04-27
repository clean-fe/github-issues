import {getIssue} from "../../../data/network/APIEndpoints";

export default class IssueModel {
  constructor(delegate) {
    this.delegate = delegate
  }

  async fetchGetIssue(keys) {
    const response = await getIssue
    this.delegate.modelCallbackHandler([...keys], response)
  }

}
