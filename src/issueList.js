import { getIssueItemTpl } from './tpl';
import { pipe } from './utils';

function getIssueItemsTemplate(issueDataList) {
  return issueDataList.map((list) => getIssueItemTpl(list)).join('');
}

function renderIssueItems(template) {
  const issueItemEl = document.querySelector('.issue-list ul');
  issueItemEl.innerHTML = template;
}

export function issueList(issueDataList) {
  pipe(getIssueItemsTemplate, renderIssueItems)(issueDataList);
}
