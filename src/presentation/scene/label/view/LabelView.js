import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";

const ObserverList = Object.freeze({
  renderLabelList: 'renderLabelList'
})

export default class LabelView extends View {
  constructor() {
    super('label initializer')
    this.renderApp(getLabelTpl())
    this.viewModel = new LabelViewModel()
    this.viewModel.subscribe(ObserverList.renderLabelList, this.renderLabelList)
    this.getLabelList()
  }

  getLabelList() {
    const _ = this.viewModel.getData(ObserverList.renderLabelList)
  }

}

// MARK: Render

Object.defineProperty(LabelView.prototype, 'renderLabelList', {
  value: function (data) {
    return renderWithTemplate('#label-wrapper__ul')(getLabelItemTpl)(data)
  }
})
