import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";

const ObserverList = Object.freeze({
  renderLabelList: 'renderLabelList',
  updateLabelStatus: 'updateLabelStatus'
})

export default class LabelView extends View {
  constructor() {
    super('label initializer')
    this.renderApp(getLabelTpl())
    this.viewModel = new LabelViewModel()
    this.viewModel.subscribe(ObserverList.renderLabelList, this.renderLabelList)
    this.viewModel.subscribe(ObserverList.updateLabelStatus, this.labelStatusTab)
    this.getLabelList()
  }

  getLabelList() {
    const _ = this.viewModel.getData()
  }

}

// MARK: Render

Object.defineProperty(LabelView.prototype, 'renderLabelList', {
  value: function (data) {
    return renderWithTemplate('#label-wrapper__ul')(getLabelItemTpl)(data)
  }
})

Object.defineProperty(LabelView.prototype, 'labelStatusTab', {
  value: function (data) {
    const labelCounter = $('#label-counter')
    labelCounter.textContent = `${data.length ?? 0} Labels`
  }
})
