import { getIssueTpl } from './tpl';
import { statusTab } from './statusTab';
import { issueList } from './issueList';
import { pipe, shareToChild } from './utils';

function renderIssueTemplate(template) {
  const appEl = document.querySelector('#app');
  appEl.innerHTML = template;
}

async function fetchIssues() {
  return await fetch('/data-sources/issues.json').then((response) => response.json());
}

function main() {
  // IssueTpl render-> 데이터 패칭 -> statusTab
  //                            -> issueList
  pipe(getIssueTpl, renderIssueTemplate, fetchIssues, shareToChild(statusTab, issueList))();
}

main();
