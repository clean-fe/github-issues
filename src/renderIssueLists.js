import { getIssueItemTpl } from "./tpl.js";
import { $, fetchList, promisePipe, shareParams } from "./utils.js";
const issueUrl = "./data-sources/issues.json";

const filterStatus = (list, status) => {
  const filteredList = list.filter((item) => item.status === status);
  return filteredList;
};

const renderClickedList = (list, status) => {
  return filterStatus(list, status)
    .map((item) => getIssueItemTpl(item))
    .join("");
};

const statusCounts = (list) => {
  const openCount = $(".open-count");
  const closedCount = $(".close-count");

  const openCountList = filterStatus(list, "open");
  const closedCountList = filterStatus(list, "close");

  openCount.innerText = `${openCountList.length} Opens`;
  closedCount.innerText = `${closedCountList.length} Closed`;
};

const adjacentIssueList = (list) => {
  const issueLists = $("ul");

  issueLists.insertAdjacentHTML("afterbegin", renderClickedList(list, "open"));
};

const clickedIssues = (list) => {
  const issueLists = $("ul");
  const openCount = $(".open-count");
  const closedCount = $(".close-count");

  const openClickRender = () => {
    issueLists.innerHTML = `<ul>${renderClickedList(list, "open")}</ul>`;

    if (!openCount.classList.contains("font-bold")) {
      openCount.classList.add("font-bold");
      closedCount.classList.remove("font-bold");
    }
  };

  const closedClickRedner = () => {
    issueLists.innerHTML = `<ul>${renderClickedList(list, "close")}</ul>`;

    if (!closedCount.classList.contains("font-bold")) {
      closedCount.classList.add("font-bold");
      openCount.classList.remove("font-bold");
    }
  };

  const openClicked = openCount.addEventListener("click", openClickRender);

  const closedClicked = closedCount.addEventListener(
    "click",
    closedClickRedner
  );
};

export const renderIssueList = () =>
  promisePipe(
    fetchList,
    shareParams(statusCounts, adjacentIssueList, clickedIssues)
  )(issueUrl);
