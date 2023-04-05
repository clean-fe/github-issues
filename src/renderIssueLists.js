import { getIssueItemTpl } from "./tpl.js";
import { $, fetchList, promisePipe, shareParams } from "./utils.js";
const ISSUE_URL = "./data-sources/issues.json";
const STATUS = {
  OPEN: "open",
  CLOSED: "close",
};

const filterStatus = (list, status) => {
  return list.filter((item) => item.status === status);
};

const renderStatusList = (list, status) => {
  return filterStatus(list, status)
    .map((item) => getIssueItemTpl(item))
    .join("");
};

const countStatus = (list) => {
  const openCount = $(".open-count");
  const closedCount = $(".close-count");

  const openCountList = filterStatus(list, STATUS.OPEN);
  const closedCountList = filterStatus(list, STATUS.CLOSED);

  openCount.innerText = `${openCountList.length} Opens`;
  closedCount.innerText = `${closedCountList.length} Closed`;
};

const adjacentOpenIssueList = (list) => {
  const issueLists = $("ul");

  issueLists.insertAdjacentHTML(
    "afterbegin",
    renderStatusList(list, STATUS.OPEN)
  );
};

const clickedIssues = (list) => {
  const issueLists = $("ul");
  const openCount = $(".open-count");
  const closedCount = $(".close-count");

  const updateIssueList = (list, status) => {
    issueLists.innerHTML = `<ul>${renderStatusList(list, status)}</ul>`;
    const selectedCount = status === STATUS.OPEN ? openCount : closedCount;
    const unselectedCount = status === STATUS.OPEN ? closedCount : openCount;

    selectedCount.classList.add("font-bold");
    unselectedCount.classList.remove("font-bold");
  };

  const clickedStatus = (list, status) => () => {
    updateIssueList(list, status);
  };

  const openClicked = openCount.addEventListener(
    "click",
    clickedStatus(list, STATUS.OPEN)
  );

  const closedClicked = closedCount.addEventListener(
    "click",
    clickedStatus(list, STATUS.CLOSED)
  );
};

export const renderIssueList = () =>
  promisePipe(
    fetchList,
    shareParams(countStatus, adjacentOpenIssueList, clickedIssues)
  )(ISSUE_URL);
