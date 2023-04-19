import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {renderInnerHTML, renderWithTemplate} from "../../../utils/Render";
import {pipe} from "../../../../application/FP";
import IssueView from "../../issue/view/IssueView.js";

const ObserverList = Object.freeze({
  labelList: 'labelList'
})

export default class LabelView extends View {
  constructor() {
    super('label initializer')
    this.renderApp(getLabelTpl())
    this.viewModel = new LabelViewModel()
    this.viewModel.subscribe(ObserverList.labelList, this.renderLabelList)
    this.getLabelList()
  }

  getLabelList() {
    const _ = this.viewModel.getData(ObserverList.labelList)
  }

}

// MARK: Render

Object.defineProperty(LabelView.prototype, 'renderLabelList', {
  value: function (data) {
    return renderWithTemplate('#label-wrapper__ul')(getLabelItemTpl)(data)
  }
})
