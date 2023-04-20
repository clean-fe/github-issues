import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";
import {clickEventBind} from "../../../utils/EventBinding";
import Label from "../../../../domain/use_cases/label/Label.js";

const ObserverList = Object.freeze({
  renderLabelList: 'renderLabelList',
  updateLabelStatus: 'updateLabelStatus'
})

export default class LabelView extends View {
  constructor() {
    // MARK: init
    super('label initializer')
    this.renderApp(getLabelTpl())
    this.viewModel = new LabelViewModel()

    // MARK: ViewModel Render Binding
    this.viewModel.subscribe(ObserverList.renderLabelList, this.renderLabelList)
    this.viewModel.subscribe(ObserverList.updateLabelStatus, this.labelStatusTab)
    this.getLabelList()

    // MARK: Event Action Binding
    this.bindNewLabelButton()
    this.bindCancelNewLabelForm()
    this.randomLabelColor()
  }

  getLabelList() {
    const _ = this.viewModel.getData()
  }

  // Object.defineProperty 에서는 super 호출이 불가능하다.
  openNewLabelForm() {
    super.toggleClassOff('#new-label-form', 'hidden')
  }

  closeNewLabelForm() {
    super.toggleClassOn('#new-label-form', 'hidden')
    $('#new-label-form').reset()
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

// MARK: Event Action

Object.defineProperty(LabelView.prototype, 'bindNewLabelButton', {
  value: function () {
    return clickEventBind('#new-label-button')(this.openNewLabelForm)
  }
})

Object.defineProperty(LabelView.prototype, 'bindCancelNewLabelForm', {
  value: function () {
    return clickEventBind('#label-cancel-button')(this.closeNewLabelForm)
  }
})

Object.defineProperty(LabelView.prototype, 'randomLabelColor', {
  value: function () {
    clickEventBind('#new-label-color')(() => {
      const color = Label.getRandomLabelColor()
      $('#label-color-value').value = color
      $('#label-preview').style.backgroundColor = color
    })
  }
})


