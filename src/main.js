import { getIssueItemTpl, getIssueTpl } from './tpl';

const app = document.getElementById('app');
app.innerHTML = getIssueTpl();

const ul = document.querySelector('.issue-list ul');

const getData = async () => {
  const res = await fetch('/data-sources/issues.json')
  const data = await res.json();

  return data;
};

const items = await getData();
ul.innerHTML = items.map((item) => getIssueItemTpl(item)).join('');

// open-count, close-count dom을 찾는다
// items에서 opened, closed 를 각각 필터, length 구해서
// 각각의 dom에 innerHTML 한다.
