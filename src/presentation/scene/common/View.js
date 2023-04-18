import {renderInnerHTML, renderAfterBegin} from "../../utils/Render.js";
import {pipe} from "../../../application/FP.js";

export default class View {
  constructor(component) {
    this.initializer(component)
    this.app = document.getElementById('app');
    // this.clearApp = clearBeforeRender(this.app)
    this.renderApp = renderInnerHTML(this.app)
  }

  initializer(component) {
    console.info(`initializer is called! ${component}`)
  }

  refresh(actions = []) {
    console.info(`refresh is called! ${actions}`)
    actions?.forEach(action => action())
  }

  #renderApp(html) {
    console.log(`renderApp called!! : ${html}`)
    // return pipe(
    //     this.clearApp,
    //     this.renderApp
    // )(html)
    this.renderApp(html)
  }

}
