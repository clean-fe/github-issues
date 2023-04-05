import { getIssueItemTpl } from './tpl';
import { getIssueTpl } from './tpl';
import { pipe, request, $, setTpl } from './utils';

const ISSUE_URL = '/data-sources/issues.json';

const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

const openStatusList = await pipe(request, filterStatus('open'))(ISSUE_URL);
const closeStatusList = await pipe(request, filterStatus('close'))(ISSUE_URL);

const go = (a, ...fns) => fns.reduce((acc, fn) => fn(acc), a);

const setIssueTpl = (issueCount) => go(issueCount, getIssueTpl, setTpl);

const reduceIssueItemTpl = (list) => list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');
const setIssueListTpl = (list) => go(list, reduceIssueItemTpl, setTpl);

const addToggleCountEvent = (setListTpl, $target, $nontarget) => {
  $target.addEventListener('click', () => {
    toggleCountBtn(setListTpl, $target, $nontarget);
  });
};

const toggleCountBtn = (setListTpl, $focused, $unfocused) => {
  setListTpl($('#issues'));
  $focused.style.fontWeight = 'bold';
  $unfocused.style.fontWeight = 'normal';
};

const setInitialIssueTpl = () => {
  setIssueTpl({ openCount: openStatusList.length, closeCount: closeStatusList.length })($('#app'));
  setIssueListTpl(openStatusList)($('#issues'));
};

const addToggleCountEvents = () => {
  addToggleCountEvent(setIssueListTpl(closeStatusList), $('.close-count'), $('.open-count'));
  addToggleCountEvent(setIssueListTpl(openStatusList), $('.open-count'), $('.close-count'));
};

export const setIssueOnDocument = () => {
  setInitialIssueTpl();
  addToggleCountEvents();
};
