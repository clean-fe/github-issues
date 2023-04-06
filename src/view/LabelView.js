import {getLabel} from "../util/APIs/Label";
import {clearLabelBeforeRender, renderLabelList} from "../components/label/LabelItem";
import {pipe} from "../util/FP";

// fetch
const labelList = await getLabel()

const renderLabel = pipe(
    clearLabelBeforeRender,
    renderLabelList
)

renderLabel(labelList)
