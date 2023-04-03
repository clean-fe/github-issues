import { getIssueItemTpl } from './tpl';
import issues from '../data-sources/issues.json';

// 선택자를 받아서 element를 리턴하는 함수
// TODO: 중복 시 공통 모듈로 빼기
const $ = (selectorName) => {
  return document.querySelector(selectorName);
};

// 합쳐진 리스트를 돔에 세팅하는 함수
const setListTplOnSelector = (list) => (selector) => {
  selector.innerHTML = list.reduce((acc, curr) => (acc += getIssueItemTpl(curr)), '');
};
// TODO: 유틸로 빼기
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

const setIssuesOnSelector = setListTplOnSelector(issues);

export const setIssueOnDocument = pipe($, setIssuesOnSelector);
