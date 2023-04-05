import { getIssueTpl, getIssueItemTpl, getLabelTpl } from './tpl';
import { api } from './utils/api';
import { getIssues } from './api/issues';
import { getLabels } from './api/labels';

import { arrayfilter } from './utils/array';

const appEl = document.querySelector('#app');
appEl.innerHTML = getIssueTpl();

const issueListEl = document.querySelector('.issue-list ul');

const statusOpenEl = document.querySelector('.open-count');
const statusCloseEl = document.querySelector('.close-count');

const ISSUE_OPEN_DATA = [];
const ISSUE_CLOSE_DATA = [];

getIssues().then(data => {
  issueListEl.innerHTML = data.map(item => getIssueItemTpl(item)).join('');

  ISSUE_OPEN_DATA.push(...arrayfilter(data, 'status', 'open'));
  ISSUE_CLOSE_DATA.push(...arrayfilter(data, 'status', 'close'));

  statusOpenEl.innerHTML = `${ISSUE_OPEN_DATA.length} Opens`;
  statusCloseEl.innerHTML = `${ISSUE_CLOSE_DATA.length} Closed`;
});

getLabels().then(data => console.log(data));
