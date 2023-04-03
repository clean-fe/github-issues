import { getIssueTpl, getIssueItemTpl, getLabelTpl, getLabelItemTpl } from './tpl';
import items from '../data-sources/issues.json';
import labels from '../data-sources/labels.json';

const $app = document.querySelector('#app');
$app.innerHTML = getIssueTpl();
const $issueList = document.querySelector('#issues');
$issueList.innerHTML = items.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');

const $labelBtn = document.querySelector('#label-btn');

$labelBtn.addEventListener('click', (e) => {
  $app.innerHTML = getLabelTpl();
  const $labelList = document.querySelector('.label-list');
  $labelList.innerHTML = labels.reduce((acc, curr) => (acc += getLabelItemTpl(curr)), '');
});

const $issueBtn = document.querySelector('#issue-btn');

$issueBtn.addEventListener('click', (e) => {
  $app.innerHTML = getIssueTpl();
  const $issueList = document.querySelector('#issues');
  $issueList.innerHTML = items.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');
});
