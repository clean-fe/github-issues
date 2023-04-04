import { getIssueItemTpl } from './tpl';
import { getIssueTpl } from './tpl';

const issueUrl = '/data-sources/issues.json';

// TODO: 유틸로 빼기
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

const sequence = (...fns) => {
  fns.forEach((fn) => fn());
};

// TODO: 재사용 가능
const $ = (selectorName) => document.querySelector(selectorName);

const setTpl = (html) => ($dom) => {
  $dom.innerHTML = html;
};

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

const getOpenStatusList = await pipe(request, filterStatus('open'))(issueUrl);
const getCloseStatusList = await pipe(request, filterStatus('close'))(issueUrl);

const setIssueTpl = setTpl(getIssueTpl(getOpenStatusList.length, getCloseStatusList.length));

const setIssueListTpl = (list) => setTpl(list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), ''));

const setOpenIssueListTpl = setIssueListTpl(getOpenStatusList);
const setCloseIssueListTpl = setIssueListTpl(getCloseStatusList);

// TODO: 리팩터링(가독성)
export const setIssueOnDocument = () => {
  sequence(
    () => setIssueTpl($('#app')),
    () => setOpenIssueListTpl($('#issues')),
    () => addToggleCountEvent(setCloseIssueListTpl, $('.close-count'), $('.open-count')),
    () => addToggleCountEvent(setOpenIssueListTpl, $('.open-count'), $('.close-count'))
  );
};

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
