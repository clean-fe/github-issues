import {getLabelItemTpl} from "../../tpl";

import {clearBeforeRender, renderBeforeEnd} from "../../presentation/utils/Render.js";
import {pipe} from "../../application/FP.js";

const labelUl = document.getElementById('label-wrapper__ul')

const createLabelHtml = list => list.map(label => getLabelItemTpl(label))
const renderLabel = el => html => renderBeforeEnd(el)(html)
const renderLabelAtLabelUl = renderLabel(labelUl)
const clearLabelBeforeRender = clearBeforeRender(labelUl)
const renderLabelList = pipe(
    createLabelHtml,
    renderLabelAtLabelUl
)

export {
  clearLabelBeforeRender,
  renderLabelList
}
