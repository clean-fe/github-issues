import { getIssueTpl, getIssueItemTpl, getLabelTpl } from './tpl';
import { api } from './utils/api';
import { getIssues } from './api/issues';
import { getLabels } from './api/labels';

const appEl = document.querySelector('#app');
appEl.innerHTML = getIssueTpl();

const issueListEl = document.querySelector('.issue-list ul');

getIssues().then(data => {
  issueListEl.innerHTML = data.map(item => getIssueItemTpl(item)).join('');
});

const statusOpenEl = document.querySelector('.open-count');
const statusCloseEl = document.querySelector('.close-count');

console.log(statusOpenEl, statusCloseEl);

getLabels().then(data => console.log(data));
