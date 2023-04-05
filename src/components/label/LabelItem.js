import {clearBeforeRender, renderBeforeEnd} from "../../util/UI/ManagingDOM.js";
import {getLabelItemTpl} from "../../tpl.js";
import {pipe} from "../../util/FP.js";

const ul = document.querySelector("#labels-wrapper > ul")

const createLabelHtml = list => list.map(label => getLabelItemTpl(label))
const renderLabel = el => html => renderBeforeEnd(el)(html)
const renderLabelAtUl = renderLabel(ul)
const clearLabelBeforeRender = clearBeforeRender(ul)
const renderLabelList = pipe(
    createLabelHtml,
    renderLabelAtUl
)

export {
  clearLabelBeforeRender,
  renderLabelList
}
