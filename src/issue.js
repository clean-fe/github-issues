import { getIssueItemTpl } from './tpl';
import { getIssueTpl } from './tpl';

const issueUrl = '/data-sources/issues.json';

// TODO: 유틸로 빼기
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

const $ = (selectorName) => document.querySelector(selectorName);
const setTpl = (html) => ($dom) => {
  $dom.innerHTML = html;
};

const getOpenStatus = await pipe(request, filterStatus('open'))(issueUrl);
const getCloseStatus = await pipe(request, filterStatus('close'))(issueUrl);

const setIssueTpl = setTpl(getIssueTpl(getOpenStatus.length, getCloseStatus.length));

const setIssueListTpl = setTpl(
  getOpenStatus.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), ''),
);

// TODO: 합성 함수로 변경
export const setIssueOnDocument = () => {
  setIssueTpl($('#app'));
  setIssueListTpl($('#issues'));
};
