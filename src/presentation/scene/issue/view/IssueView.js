import View from "../../common/View";
import IssueViewModel from "../view_model/IssueViewModel";
import {getIssueTpl, getIssueItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";
import {pipe} from "../../../../application/FP";

const ObserverList = Object.freeze({
  issueList: 'issueList'
})
export default class IssueView extends View {
  constructor() {
    super('issued initializer')
    this.renderApp(getIssueTpl())
    this.viewModel = new IssueViewModel()
    this.viewModel.subscribe(ObserverList.issueList, this.renderIssueList)
    this.getIssueList()
  }

  getIssueList() {
    const _ = this.viewModel.getData(ObserverList.issueList)
  }

}

// MARK: Render

Object.defineProperty(IssueView.prototype, 'renderIssueList', {
  value: function (data) {
    return renderWithTemplate('#issue-wrapper__ul')(getIssueItemTpl)(data)
  }
})
