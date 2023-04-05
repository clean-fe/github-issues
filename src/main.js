import { getIssueItemTpl, getIssueTpl } from "./tpl.js";
import { fetchIssues } from "./api.js";
import {
  updateDOM,
  fromEvent,
  pipe,
  filterItems,
  renderItems,
} from "./utils.js";

main();

function main() {
  pipe(getIssueTpl, updateDOM("#app"), renderIssues("open"))();
  fromEvent(document, "input").subscribe(handleInputSearch);
  fromEvent(document, "click").subscribe(handleClickTab);
}

function renderIssues(issueStatus) {
  return pipe(
    fetchIssues,
    filterItems((item) => item.status === issueStatus),
    renderItems(getIssueItemTpl),
    updateDOM("ul")
  );
}

function handleInputSearch(e) {
  if (e.target.id === "filter-input") {
    pipe(
      fetchIssues,
      filterItems((item) => item.title.includes(e.target.value)),
      renderItems(getIssueItemTpl),
      updateDOM("ul")
    )();
  }
}

function handleClickTab(e) {
  if (e.target.classList.contains("open-count")) {
    renderIssues("open")();
    return;
  }

  if (e.target.classList.contains("close-count")) {
    renderIssues("close")();
    return;
  }
}
