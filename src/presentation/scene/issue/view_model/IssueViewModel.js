import Observable from "../../../../application/Observable";
import IssueModel from "../../../../domain/use_cases/issue/IssueModel";

export default class IssueViewModel extends Observable {
  constructor() {
    super();
    this.model = new IssueModel(this) // delegate 패턴... ViewModel 과 Model 의 결합도가 높아져서 별로이려나...?
  }

  async getData(options) {
    const response = await this.model.fetchGetIssue()
    this.notify(response)
  }

}
