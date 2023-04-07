import { go, setTpl, $ } from '../utils';
import { getIssueTpl, getIssueItemTpl } from '../tpl';

const setIssueTpl = (issueCount) => go(issueCount, getIssueTpl, setTpl);

const reduceIssueItemTpl = (list) => list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');

export const setIssueListTpl = (list) => go(list, reduceIssueItemTpl, setTpl);

export const setInitialIssueTpl = (openStatusList, closeStatusList) => {
  setIssueTpl({ openCount: openStatusList.length, closeCount: closeStatusList.length })($('#app'));
  setIssueListTpl(openStatusList)($('#issues'));
};
