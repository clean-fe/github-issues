import { describe, it, beforeAll, expect } from 'vitest';
import { LabelButton } from '../label/Label.js';
import { $, fetcher, pipe } from '../utils/index.js';
import { setInitialIssueTpl } from '../issue/render.js';
import { addToggleCountEvents } from '../issue/event.js';
import { filterStatus, mapIssue } from '../issue/api.js';
import { Event } from './event.js';

const ISSUE_URL = 'http://localhost:3000/issues';
const getAsyncDataPipe = pipe(fetcher, mapIssue);
describe('label 기능 요구사항 테스트', () => {
  beforeAll(async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
    const filterListByStatus = filterStatus(list);
    const openStatusList = filterListByStatus('open');
    const closeStatusList = filterListByStatus('close');
    setInitialIssueTpl(openStatusList, closeStatusList);
    addToggleCountEvents(openStatusList, closeStatusList);
  });

  it('label 갯수 표시', () => {
    new LabelButton().addEvent();
    const $labelBtn = $('#label-btn');
    $labelBtn.dispatchEvent(Event.click);
    expect($('.open-count').innerHTML).toBe('6 Labels');
  });
});
