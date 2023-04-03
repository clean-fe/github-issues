import { getIssueItemTpl, getIssueTpl } from './tpl';

const app = document.getElementById('app');
app.innerHTML = getIssueTpl();

const ul = document.querySelector('.issue-list ul');

const getData = async () => {
  await fetch('/data-sources/issues.json')
    .then((response) => response.json())
    .then((data) => {
      const items = data.map((item) => getIssueItemTpl(item));
      ul.innerHTML = items.join('');
    });
};

getData();
