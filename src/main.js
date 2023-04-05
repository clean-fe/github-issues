import { getIssueItemTpl, getIssueTpl } from "./tpl.js";
import { Observable } from "./Observable.js";

const ISSUES_URL = "../data-sources/issues.json";

main();

function main() {
  pipe(getIssueTpl, updateDOM("#app"), renderIssues("open"))();
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

function filterItems(filterer) {
  return (items) => items.filter(filterer);
}

function renderItems(renderer) {
  return (items) => items.map(renderer);
}

function updateDOM(target) {
  return (template) => {
    document.querySelector(target).innerHTML = template;
  };
}

async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}

async function fetchIssues() {
  return fetchData(ISSUES_URL);
}

function pipe(...functions) {
  return (initArg) =>
    functions.reduce(
      async (nextArg, nextFunction) => nextFunction(await nextArg),
      initArg
    );
}

function fromEvent(target, eventName) {
  return new Observable((observer) => {
    target.addEventListener(eventName, observer);
  });
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
