import { getIssueTpl, getIssueItemTpl } from "./tpl.js";
import { renderList, pipe } from "./utils.js";
const initPage = document.getElementById("app");
const issueUrl = "../data-sources/issues.json";

const renderIssueList = (list) => {
  const issueLists = document.querySelector("ul");

  issueLists.insertAdjacentHTML(
    "afterbegin",
    `${list.map((item) => getIssueItemTpl(item)).join("")}`
  );
};

const init = () => {
  initPage.insertAdjacentHTML("afterbegin", `${getIssueTpl()}`);
};

const render = () => pipe(init, renderList(issueUrl, renderIssueList))();
render();
