import { renderIssues } from "./render.js";

export function handleInputSearch(e) {
  if (e.target.id === "filter-input") {
    renderIssues((item) => item.title.includes(e.target.value))();
  }
}

export function handleClickTab(e) {
  if (e.target.classList.contains("open-count")) {
    renderIssues((issue) => issue.status === "open")();
    return;
  }

  if (e.target.classList.contains("close-count")) {
    renderIssues((issue) => issue.status === "close")();
    return;
  }
}
