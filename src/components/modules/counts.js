import { $ } from "../../utils/dom";
import { renderComponent } from "../commons/render";

const renderCount = data => {
    $(`.${data[0].status}-count`).innerHTML = `${data.length} ${
    data[0].status == "open" ? "Opens" : "Closed"
  }`
};

export const renderCountByStatus = renderComponent(renderCount)