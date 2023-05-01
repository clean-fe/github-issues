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
    // MARK: init
    super('issued initializer')
    this.renderApp(getIssueTpl())
    this.viewModel = new IssueViewModel()

    // MARK: ViewModel Render Binding
    this.viewModel.subscribe(ObserverList.renderIssueList, this.renderIssueList)
    this.viewModel.subscribe(ObserverList.updateIssueStatus, this.bindStatusTab)
    this.getIssueList()
  }

}

// MARK: Data

Object.defineProperty(IssueView.prototype, 'getIssueList', {
  value: function () {
    this.viewModel.getData([ObserverList.renderIssueList, ObserverList.updateIssueStatus])
  }
})

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

// 이렇게 하면... IssueView 를 export 해도 외부 모듈에서 이 메서드가 노출되지 않는다.
// file private 처럼 동작할테고... 굳이 bindStatusTab 내부에 직접 캡쳐를 하지 않아도 은닉화가 잘 동작할 것으로 예상...
const statusFilter = status => list => list.filter(issue => status === issue.status)

// MARK: Status Tab Click Filter
// TODO: 선택시 'font-bold' 클래스 토글 시키면서 선택된 것만 필터링. opens, closed 2개 동시 체크 불가. 둘 다 미체크는 가능.
Object.defineProperty(IssueView.prototype, 'statusFilter', {
  value: function () {

  }
})
