import { pipe, request } from '../utils';
import { mapIssue, filterStatus } from './api';
import { addToggleCountEvents } from './event';
import { setInitialIssueTpl } from './render';

const ISSUE_URL = '/data-sources/issues.json';

const setIssueOnDocument = async () => {
  const openStatusList = await pipe(request, mapIssue, filterStatus('open'))(ISSUE_URL);
  const closeStatusList = await pipe(request, mapIssue, filterStatus('close'))(ISSUE_URL);

  setInitialIssueTpl(openStatusList, closeStatusList);
  addToggleCountEvents(openStatusList, closeStatusList);
};

export default setIssueOnDocument;
