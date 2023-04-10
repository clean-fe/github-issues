import { getIssues } from './api/issues';
import { filter } from './utils/iterator';

import {
  getElement,
  getElements,
  drawHtml,
  removeClass,
  addClass
} from './utils/element';

import { getIssueTpl, getIssueItemTpl } from './tpl';

import { isStringMatched } from './utils/evaluation';

async function Issue() {
  const issueData = await getIssues();
  const issueOpenData = filter(item => item.status === 'open', issueData);

  const issueCloseData = filter(item => item.status === 'close', issueData);

  drawHtml(getElement('#app'), getIssueTpl());
  drawHtml(getElement('.open-count'), `${issueOpenData.length} Opens`);
  drawHtml(getElement('.close-count'), `${issueCloseData.length} Closed`);

  drawHtml(
    getElement('.issue-list ul'),
    issueOpenData.map(data => getIssueItemTpl(data)).join('')
  );

  getElement('.statusTab').addEventListener('click', e => {
    if (!isStringMatched(e.target.tagName, 'BUTTON')) return false;

    removeClass(getElements('button[data-status]'), 'font-bold');
    addClass(e.target, 'font-bold');

    switch (e.target.dataset.status) {
      case 'open':
        drawHtml(
          getElement('.issue-list ul'),
          issueOpenData.map(data => getIssueItemTpl(data)).join('')
        );

        break;
      default:
        drawHtml(
          getElement('.issue-list ul'),
          issueCloseData.map(data => getIssueItemTpl(data)).join('')
        );
    }
  });
}

export default Issue;
