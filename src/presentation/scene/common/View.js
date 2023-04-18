import {renderInnerHTML, renderAfterBegin} from "../../utils/Render";

export default class View {
  constructor(component) {
    this.initializer(component)
    this.app = document.getElementById('app');
    this.renderApp = renderInnerHTML(this.app)
  }

  initializer(component) {
    console.debug(`initializer is called! ${component}`)
  }

  refresh(actions = []) {
    console.debug(`refresh is called! ${actions}`)
    actions?.forEach(action => action())
  }

  #renderApp(html) {
    this.renderApp(html)
  }

}
