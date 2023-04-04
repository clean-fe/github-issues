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

const openCount = document.querySelector('.open-count');
const closeCount = document.querySelector('.close-count');

const openItems = items.filter(item => item.status === 'open');
const closeItems = items.filter(item => item.status === 'close');

openCount.innerHTML = `${openItems.length} Opens`;
closeCount.innerHTML = `${closeItems.length} Closed`;

openCount.addEventListener('click', () => {
  console.log('open 클릭')
  // style 변경 -> bold 처리
  // 리스트 렌더링 다시
})

closeCount.addEventListener('click', () => {
  console.log('close 클릭')
})
