import { getIssueTpl } from './tpl';
import { statusTab } from './statusTab';
import { issueList } from './issueList';
import { pipe, renderTemplate, shareToChild } from './utils';

const renderIssueTemplate = renderTemplate('#app');

const fetchIssues = async () => {
  return await fetch('/data-sources/issues.json').then((response) => response.json());
};

const main = () => {
  let issueStatus = 'open';

  const setStatus = (newStatus) => {
    issueStatus = newStatus;
    pipe(fetchIssues, renderChild(newStatus))();
  };

  const onClickStatusTab = (newStatus) => {
    setStatus(newStatus);
  };

  const renderChild = (status) => {
    return (fetchIssues) => {
      shareToChild(statusTab({ status, onClickStatusTab }), issueList({ status }))(fetchIssues);
    };
  };

  pipe(getIssueTpl, renderIssueTemplate, fetchIssues, renderChild(issueStatus))();
};

main();
