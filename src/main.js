import { getIssueItemTpl, getIssueTpl } from './tpl';

const app = document.getElementById('app');
app.innerHTML = getIssueTpl();

const ul = document.querySelector('.issue-list ul');

const getData = async () => {
  const res = await fetch('/data-sources/issues.json');
  const data = await res.json();

  return data;
};

const items = await getData();

ul.innerHTML = items.map((item) => getIssueItemTpl(item)).join('');

const openCount = document.querySelector('.open-count');
const closeCount = document.querySelector('.close-count');

const getOpenedItems = async () => {
  const items = await getData();
  const openItems = items.filter((item) => item.status === 'open');

  return openItems;
};

const getClosedItems = async () => {
  const items = await getData();
  const closedItems = items.filter((item) => item.status === 'close');

  return closedItems;
};

const openItems = await getOpenedItems();
const closeItems = await getClosedItems();
openCount.innerHTML = `${openItems.length} Opens`;
closeCount.innerHTML = `${closeItems.length} Closed`;

openCount.addEventListener('click', async () => {
  const openItems = await getOpenedItems();

  ul.innerHTML = openItems.map((item) => getIssueItemTpl(item)).join('');

  openCount.classList.add('font-bold');
  closeCount.classList.remove('font-bold');
});

closeCount.addEventListener('click', async () => {
  const closeItems = await getClosedItems();

  ul.innerHTML = closeItems.map((item) => getIssueItemTpl(item)).join('');

  closeCount.classList.add('font-bold');
  openCount.classList.remove('font-bold');
});
