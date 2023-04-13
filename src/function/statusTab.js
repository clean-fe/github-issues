import { pipe } from './utils';

const getStatusCount = (issueList) => {
  return issueList.reduce(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { open: 0, close: 0 }
  );
};

const renderCount = (status, handleClickCount) => {
  return (countResult) => {
    const statusCountEl = document.querySelector('.statusTab');
    const statusList = [
      { statusText: 'open', labelText: 'Opens' },
      { statusText: 'close', labelText: 'Closed' },
    ];

    statusCountEl.innerHTML = '';

    statusList.forEach(({ statusText, labelText }) => {
      statusCountEl.insertAdjacentHTML(
        'beforeend',
        `<div class="whitespace-nowrap ${statusText}-count 
          ${statusText === status && `font-bold`} 
          ${statusText === 'close' && 'ml-3'} cursor-pointer"
          >
          ${countResult[statusText]} ${labelText}
        </div>`
      );
      const countEl = document.querySelector(`.${statusText}-count`);
      countEl.addEventListener('click', () => {
        handleClickCount(statusText);
      });
    });
  };
};

export const statusTab = ({ status, onClickStatusTab }) => {
  return (issueDataList) =>
    pipe(getStatusCount, renderCount(status, onClickStatusTab))(issueDataList);
};
