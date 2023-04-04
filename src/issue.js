import { getIssueItemTpl } from './tpl';

const issueUrl = '/data-sources/issues.json';

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

// 선택자를 받아서 element를 리턴하는 함수
// TODO: 중복 시 공통 모듈로 빼기
const $ = (selectorName) => document.querySelector(selectorName);

// 합쳐진 리스트를 돔에 세팅하는 함수
const setListTplOnSelector = (list) => (selector) => {
  selector.innerHTML = list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');
};

// TODO: 유틸로 빼기
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => (acc instanceof Promise ? acc.then(fn) : fn(acc)), initialValue);

const getOpenStatus = await pipe(request, filterStatus('open'))(issueUrl);
const getCloseStatus = await pipe(request, filterStatus('close'))(issueUrl);

const setIssuesOnSelector = setListTplOnSelector(issues);
export const setIssueOnDocument = pipe($, setIssuesOnSelector);
