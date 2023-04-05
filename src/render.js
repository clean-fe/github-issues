import { pipe, filterItems, renderItems, updateDOM } from "./utils";
import { fetchIssues } from "./api";
import { getIssueItemTpl } from "./tpl";

export function renderIssues(issueFilter) {
  return pipe(
    fetchIssues,
    filterItems(issueFilter),
    renderItems(getIssueItemTpl),
    updateDOM("ul")
  );
}

export function renderApp(getTemplate) {
  return pipe(getTemplate, updateDOM("#app"));
}
