import { getIssueTpl, getIssueItemTpl } from "./tpl.js";
import { $, fetchList, pipe } from "./utils.js";
const initPage = $("#app");
const issueUrl = "./data-sources/issues.json";

const adjacentIssueList = (list) => {
  const issueLists = $("ul");

  issueLists.insertAdjacentHTML(
    "afterbegin",
    `${list.map((item) => getIssueItemTpl(item)).join("")}`
  );
};

const renderIssueList = () => {
  fetchList(issueUrl).then((list) => {
    adjacentIssueList(list);
  });
};

const init = () => {
  initPage.insertAdjacentHTML("afterbegin", `${getIssueTpl()}`);
};

const render = () => pipe(init, renderIssueList)();

render();
