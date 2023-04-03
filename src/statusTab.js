import { pipe, shareToChild } from './utils';

function countResult(issueList) {
  return issueList.reduce(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { open: 0, close: 0 }
  );
}

function renderOpenCount(countResult) {
  const openCountEl = document.querySelector('.open-count');
  openCountEl.innerHTML = `${countResult.open} Opens`;
}

function renderClosedCount(countResult) {
  const closeCountEl = document.querySelector('.close-count');
  closeCountEl.innerHTML = `${countResult.close} Closed`;
}

export function statusTab(issueDataList) {
  pipe(countResult, shareToChild(renderOpenCount, renderClosedCount))(issueDataList);
}
