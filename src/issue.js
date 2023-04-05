import { getIssueItemTpl } from './tpl';
import { getIssueTpl } from './tpl';
import { pipe, request, $, setTpl } from './utils';

const issueUrl = '/data-sources/issues.json';

const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

const getOpenStatusList = await pipe(request, filterStatus('open'))(issueUrl);
const getCloseStatusList = await pipe(request, filterStatus('close'))(issueUrl);

const setIssueTpl = setTpl(getIssueTpl(getOpenStatusList.length, getCloseStatusList.length));

const setIssueListTpl = (list) =>
  setTpl(list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), ''));

const setOpenIssueListTpl = setIssueListTpl(getOpenStatusList);
const setCloseIssueListTpl = setIssueListTpl(getCloseStatusList);

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
  setIssueTpl($('#app'));
  setOpenIssueListTpl($('#issues'));
};

const addToggleCountEvents = () => {
  addToggleCountEvent(setCloseIssueListTpl, $('.close-count'), $('.open-count'));
  addToggleCountEvent(setOpenIssueListTpl, $('.open-count'), $('.close-count'));
};

export const setIssueOnDocument = () => {
  setInitialIssueTpl();
  addToggleCountEvents();
};
