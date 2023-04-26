import { getData } from '../utils';
import { mapIssue, filterStatus } from './select';
import { addToggleCountEvent } from './event';
import { setInitialIssueTpl } from './render';
import { $ } from '../utils';

const ISSUE_URL = '/data-sources/issues.json';

const addToggleEventForFilteredIssueState = (...toggledTargetProperty) => {
  toggledTargetProperty.forEach(({ target, nonTarget, list }) => {
    addToggleCountEvent({
      targetList: { list, selector: $('#issues') },
      $target: $(target),
      $nonTarget: $(nonTarget),
    });
  });
};

const setIssueOnDocument = async () => {
  const statusList = await getData(ISSUE_URL, mapIssue);
  const openStatusList = filterStatus('open')(statusList);
  const closeStatusList = filterStatus('close')(statusList);

  setInitialIssueTpl(openStatusList, closeStatusList);

  addToggleEventForFilteredIssueState(
    { target: '.open-count', nonTarget: '.close-count', list: openStatusList },
    { target: '.close-count', nonTarget: '.open-count', list: closeStatusList },
  );
};

export default setIssueOnDocument;
