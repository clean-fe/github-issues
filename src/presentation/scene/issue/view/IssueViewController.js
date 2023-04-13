export default class IssueViewController {
  #viewModel

  constructor(viewModel) {
    this._viewModel = viewModel
  }

  initialize() {
    const newIssueButton = document.getElementById('createNewIssue')
    newIssueButton.addEventListener('click', newIssueButtonClick)
  }

  bindEvent() {
    // View에서 발생한 이벤트를 ViewModel에서 처리하는 코드 작성
    // 예시: this.view.onClick(() => this.viewModel.setData(...));
  }
  newIssueButtonClick() {
    this._viewModel.createIssue()
  }
}
