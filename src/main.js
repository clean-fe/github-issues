import { getIssueTpl, getIssueItemTpl, getLabelTpl, getLabelItemTpl } from './tpl';
import items from '../data-sources/issues.json';

const $app = document.querySelector('#app');
$app.innerHTML = getIssueTpl();
const $issueList = document.querySelector('.issue-list');
$issueList.innerHTML = getIssueItemTpl(items[0]);
