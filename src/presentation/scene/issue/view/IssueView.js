import View from "../../common/View";
import IssueViewModel from "../view_model/IssueViewModel";
import {getIssueTpl, getIssueItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {renderInnerHTML} from "../../../utils/Render";
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

  renderIssueList(data) {
    const attachmentTarget = document.getElementById('issue-wrapper__ul')
    const renderWithTemplate = renderInnerHTML(attachmentTarget)
    const createIssueHtml = jsonResponse => jsonResponse.map(item => getIssueItemTpl(item))
    const render = pipe(
        createIssueHtml,
        renderWithTemplate
    )
    return render(data)
  }

}
