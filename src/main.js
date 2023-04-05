import { getIssueTpl } from "./tpl.js";
import { $, fetchList, pipe } from "./utils.js";
import { renderIssueList } from "./renderIssueLists.js";
const initPage = $("#app");

const init = () => {
  initPage.insertAdjacentHTML("afterbegin", `${getIssueTpl()}`);
};

const render = () => pipe(init, renderIssueList)();

render();
