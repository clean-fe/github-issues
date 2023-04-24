import View from "../../common/View";
import LabelViewModel from "../view_model/LabelViewModel";
import {getLabelTpl, getLabelItemTpl} from "../../../utils/tpl";  // View 렌더링 템플릿
import {$, renderWithTemplate} from "../../../utils/Render";
import {clickEventBind, eventBind} from "../../../utils/EventBinding";
import Label from "../../../../domain/use_cases/label/Label.js";

const ObserverList = Object.freeze({
  renderLabelList: 'renderLabelList',
  updateLabelStatus: 'updateLabelStatus'
})

let newLabelIsHidden = true

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
    this.eventListeners()

    // MARK: Dev Mock Data
    mock__NewLabelFormData()
  }

  getLabelList() {
    const _ = this.viewModel.getData()
  }

  // Object.defineProperty 에서는 super 호출이 불가능하다.
  openNewLabelForm() {
    super.toggleClassOff('#new-label-form', 'hidden')
    newLabelIsHidden = false
  }

  cancelNewLabelForm() {
    super.toggleClassOn('#new-label-form', 'hidden')
    $('#new-label-form').reset()
    newLabelIsHidden = true
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

Object.defineProperty(LabelView.prototype, 'eventListeners', {
  value: function () {
    clickEventBind('#new-label-button')(this.openNewLabelForm)
    clickEventBind('#label-cancel-button')(this.cancelNewLabelForm)
    clickEventBind('#new-label-color')((evt) => {
      const color = Label.getRandomLabelColor()
      $('#label-color-value').value = color
      $('#label-preview').style.backgroundColor = color
      this.enableCreateLabelButton(evt)
    })
    eventBind('#new-label-form')('keyup')(this.enableCreateLabelButton)
    // clickEventBind('#label-create-button')(this.postLabel)
    clickEventBind('#label-create-button')(this.postLabel)
  }
})

LabelView.prototype.enableCreateLabelButton = function (evt) {
  if (newLabelIsHidden) return
  const name = $('#label-name-input').value
  const description = $('#label-description-input').value
  const color = $('#label-color-value').value

  const label = new Label(name, description, color)
  const button = $('#label-create-button')
  if (label.validate()) {
    button.disabled = false
    button.classList.remove('opacity-50')
  } else {
    button.disabled = true
    button.classList.add('opacity-50')
  }
}

// 버튼 클릭시 데이터 post 저장하는 이벤트 만들고 저장되면 다시 로딩이 아니라 ajax 만 처리
// TODO: Post 동작 시키기
// TODO: application 에 base url 사용
// TODO: NODE_ENV 활용할 수 있을까? 프로파일별로 만들어서?
// TODO: 새로고침 페이지 유지
// TODO: 새로고침 등 데이터 로컬히스토리 저장
// TODO: 5초 지연에 따른 abort controller
// TODO: 요청 실패에 따른 에러 핸들링
LabelView.prototype.postLabel = function (evt) {
  evt.preventDefault()
  if (newLabelIsHidden) return
  console.log("I'm post button!")
}

// MARK: Setup Mock
const mock__NewLabelFormData = () => {
  $('#label-name-input').value  = 'test 001'
  $('#label-description-input').value = 'this is test number 1'
}
