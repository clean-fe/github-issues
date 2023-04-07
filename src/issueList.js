import { getIssueItemTpl } from './tpl';
import { pipe, renderTemplate } from './utils';

const getStatusIssueItems = (status) => {
  return (issueDataList) =>
    issueDataList
      .filter((issue) => issue.status === status)
      .map((list) => getIssueItemTpl(list))
      .join('');
};

const renderIssueItems = renderTemplate('.issue-list ul');

export const issueList = ({ status }) => {
  return (issueDataList) => {
    pipe(getStatusIssueItems(status), renderIssueItems)(issueDataList);
  };
};
