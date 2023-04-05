import { getIssueItemTpl } from "./tpl.js";
import { $, fetchList, promisePipe, shareParams } from "./utils.js";
const issueUrl = "./data-sources/issues.json";

// fetch리스트를 parsing -> filter(open과 close)한 함수 -> count 함수 -> 렌더링함수(open) -> 클릭 이벤트 함수 (전체적으로 리팩토링 해야한다..ㄱ-)
const filterStatus = (list, status) => {
  const filteredList = list.filter((item) => item.status === status);
  return filteredList;
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

  issueLists.insertAdjacentHTML(
    "afterbegin",
    `${filterStatus(list, "open")
      .map((item) => getIssueItemTpl(item))
      .join("")}`
  );
};

const clickedIssues = (list) => {
  const issueLists = $("ul");
  const openCount = $(".open-count");
  const closedCount = $(".close-count");

  const openClickRender = () => {
    issueLists.innerHTML = `<ul>${filterStatus(list, "open")
      .map((item) => getIssueItemTpl(item))
      .join("")}</ul>`;

    if (!openCount.classList.contains("font-bold")) {
      openCount.classList.add("font-bold");
      closedCount.classList.remove("font-bold");
    }
  };

  const closedClickRedner = () => {
    issueLists.innerHTML = `<ul>${filterStatus(list, "close")
      .map((item) => getIssueItemTpl(item))
      .join("")}</ul>`;

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
