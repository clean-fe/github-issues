import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {renderInnerHTML} from "../../../utils/Render";
import {pipe} from "../../../../application/FP";


export default class LabelView extends View{
  constructor() {
    super('label initializer')
    this.renderApp(getLabelTpl())
    this.viewModel = new LabelViewModel()
    this.viewModel.subscribe(this.renderLabelList)
    this.getLabelList()
  }

  getLabelList() {
    const _= this.viewModel.getData()
  }

  renderLabelList(data) {
    const attachmentTarget = document.getElementById('label-wrapper__ul')
    const renderWithTemplate = renderInnerHTML(attachmentTarget)
    const createIssueHtml = jsonResponse => jsonResponse.map(item => getLabelItemTpl(item))
    const render = pipe(
        createIssueHtml,
        renderWithTemplate
    )
    render(data)
  }

}
