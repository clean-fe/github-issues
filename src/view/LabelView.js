import {getLabel} from "../data/network/APIEndpoints";
import {clearLabelBeforeRender, renderLabelList} from "../components/label/LabelItem";
import {pipe} from "../application/FP.js";

// fetch
const labelList = await getLabel()

const renderLabel = pipe(
    clearLabelBeforeRender,
    renderLabelList
)

renderLabel(labelList)
