import { pipe, request } from '../utils';
import { mapIssue, filterStatus } from './api';
import { addToggleCountEvents } from './event';
import { setInitialIssueTpl } from './render';

const ISSUE_URL = '/data-sources/issues.json';

const setIssueOnDocument = async () => {
  const statusList = await pipe(request, mapIssue)(ISSUE_URL);
  const openStatusList = filterStatus('open')(statusList);
  const closeStatusList = filterStatus('close')(statusList);

  setInitialIssueTpl(openStatusList, closeStatusList);
  addToggleCountEvents(openStatusList, closeStatusList);
};

export default setIssueOnDocument;
