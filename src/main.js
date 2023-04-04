import { getIssueItemTpl, getIssueTpl } from './tpl';

const appEl = document.querySelector('#app');
appEl.innerHTML = getIssueTpl();

const issueListEl = document.querySelector('.issue-list ul');
const openedTabEl = document.querySelector('.open-count');
const closedTabEl = document.querySelector('.close-count');

const getIssueList = async () => {
  const res = await fetch('/data-sources/issues.json');
  const data = await res.json();

  return data;
};

const getOpenedItems = async () => {
  const items = await getIssueList();
  const openItems = items.filter((item) => item.status === 'open');

  return openItems;
};

const getClosedItems = async () => {
  const items = await getIssueList();
  const closedItems = items.filter((item) => item.status === 'close');

  return closedItems;
};

const items = await getOpenedItems();
issueListEl.innerHTML = items.map((item) => getIssueItemTpl(item)).join('');

const openItems = await getOpenedItems();
const closeItems = await getClosedItems();
openedTabEl.innerHTML = `${openItems.length} Opens`;
closedTabEl.innerHTML = `${closeItems.length} Closed`;

openedTabEl.addEventListener('click', async () => {
  const openItems = await getOpenedItems();

  issueListEl.innerHTML = openItems.map((item) => getIssueItemTpl(item)).join('');

  openedTabEl.classList.add('font-bold');
  closedTabEl.classList.remove('font-bold');
});

closedTabEl.addEventListener('click', async () => {
  const closeItems = await getClosedItems();

  issueListEl.innerHTML = closeItems.map((item) => getIssueItemTpl(item)).join('');

  closedTabEl.classList.add('font-bold');
  openedTabEl.classList.remove('font-bold');
});
