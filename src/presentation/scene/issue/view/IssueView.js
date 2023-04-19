import View from "../../common/View";
import IssueViewModel from "../view_model/IssueViewModel";
import {getIssueTpl, getIssueItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";

const ObserverList = Object.freeze({
  renderIssueList: 'renderIssueList',
  updateIssueStatus: 'updateIssueStatus'
})
export default class IssueView extends View {
  constructor() {
    super('issued initializer')
    this.renderApp(getIssueTpl())
    this.viewModel = new IssueViewModel()
    this.viewModel.subscribe(ObserverList.renderIssueList, this.renderIssueList)
    this.viewModel.subscribe(ObserverList.updateIssueStatus, this.bindStatusTab)
    this.getIssueList()
  }

  getIssueList() {
    const _ = this.viewModel.getData([ObserverList.renderIssueList, ObserverList.updateIssueStatus])
  }

}

// MARK: Render

Object.defineProperty(IssueView.prototype, 'renderIssueList', {
  value: function (data) {
    return renderWithTemplate('#issue-wrapper__ul')(getIssueItemTpl)(data)
  }
})

Object.defineProperty(IssueView.prototype, 'bindStatusTab', {
  value: function (data) {
    const [open, closed] = [$('.statusTab .open-count'), $('.statusTab .close-count')]
    const openCounter = statusFilter('open')(data).length ?? 0
    const closedCounter = statusFilter('close')(data).length ?? 0

    open.textContent = `${openCounter} Opens`
    closed.textContent = `${closedCounter} Closed`
  }
})

const statusFilter = status => list => list.filter(issue => status === issue.status)

// MARK: Status Tab Click Filter
// TODO: 선택시 'font-bold' 클래스 토글 시키면서 선택된 것만 필터링. opens, closed 2개 동시 체크 불가. 둘 다 미체크는 가능.
