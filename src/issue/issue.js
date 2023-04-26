import { getData } from '../utils';
import { mapIssue, filterStatus } from './select';
import { addToggleCountEvent } from './event';
import { setInitialIssueTpl } from './render';
import { $ } from '../utils';

const ISSUE_URL = '/data-sources/issues.json';

const setIssueOnDocument = async () => {
  const statusList = await getData(ISSUE_URL, mapIssue);
  const openStatusList = filterStatus('open')(statusList);
  const closeStatusList = filterStatus('close')(statusList);

  setInitialIssueTpl(openStatusList, closeStatusList);

  [
    [closeStatusList, '.close-count', '.open-count'],
    [openStatusList, '.open-count', '.close-count'],
  ].forEach(([list, target, nonTarget]) =>
    addToggleCountEvent({
      targetList: { list, selector: $('#issues') },
      $target: $(target),
      $nonTarget: $(nonTarget),
    }),
  );
};

export default setIssueOnDocument;
