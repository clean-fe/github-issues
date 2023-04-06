import { getIssueTpl, getIssueItemTpl } from './tpl';
import { getIssues } from './api/issues';

import { arrayfilter } from './utils/array';

import { getElement } from './utils/element';

const appEl = document.querySelector('#app');
appEl.innerHTML = getIssueTpl();

const issueListEl = document.querySelector('.issue-list ul');

getElement('.issue-list ul');

const statusEl = document.querySelector('.statusTab');
const statusOpenEl = document.querySelector('.open-count');
const statusCloseEl = document.querySelector('.close-count');

const ISSUE_OPEN_DATA = [];
const ISSUE_CLOSE_DATA = [];

getIssues().then(data => {
  ISSUE_OPEN_DATA.push(...arrayfilter(data, 'status', 'open'));
  ISSUE_CLOSE_DATA.push(...arrayfilter(data, 'status', 'close'));

  statusOpenEl.innerHTML = `${ISSUE_OPEN_DATA.length} Opens`;
  statusCloseEl.innerHTML = `${ISSUE_CLOSE_DATA.length} Closed`;

  issueListEl.innerHTML = ISSUE_OPEN_DATA.reduce((html, item) => {
    return (html += getIssueItemTpl(item));
  }, '');
});

statusEl.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;

  issueListEl.innerHTML = '';

  const btnEls = document.querySelectorAll('button[data-status]');

  for (let btnEl of btnEls) {
    btnEl.classList.remove('font-bold');
  }

  e.target.classList.add('font-bold');

  if (e.target.dataset.status === 'open') {
    issueListEl.innerHTML = ISSUE_OPEN_DATA.reduce((html, item) => {
      return (html += getIssueItemTpl(item));
    }, '');
  } else {
    issueListEl.innerHTML = ISSUE_CLOSE_DATA.reduce((html, item) => {
      return (html += getIssueItemTpl(item));
    }, '');
  }
});
