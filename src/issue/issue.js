import { $, pipe, request } from '../utils';
import { mapIssue, filterStatus } from './api';
import { addToggleCountEvents } from './event';
import { setInitialIssueTpl } from './render';

const ISSUE_URL = '/issues';

const setIssueOnDocument = async () => {
  const getAsyncDataPipe = pipe(request, mapIssue);

  const list = await getAsyncDataPipe(ISSUE_URL);
  const getSelectedIssue = (status) => filterStatus(status)(list);

  const openStatusList = getSelectedIssue('open');

  const closeStatusList = getSelectedIssue('close');

  $('#issue-btn').addEventListener('click', () => {
    setInitialIssueTpl(openStatusList, closeStatusList);
  });

  setInitialIssueTpl(openStatusList, closeStatusList);
  addToggleCountEvents(openStatusList, closeStatusList);
};

export default setIssueOnDocument;
