import { vi, test, beforeAll, expect, it } from 'vitest';
import { LabelButton } from '../label/Label.js';
import { filterStatus, mapIssue } from '../issue/api.js';
import { setInitialIssueTpl } from '../issue/render.js';
import { addToggleCountEvents } from '../issue/event.js';
import { $, fetcher, pipe } from '../utils/index.js';
import { Event } from './event.js';

const ISSUE_URL = 'http://localhost:3000/issues';
const getAsyncDataPipe = pipe(fetcher, mapIssue);
test('Label 클래스 테스트', () => {
  beforeAll(async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
    const filterListByStatus = filterStatus(list);
    const openStatusList = filterListByStatus('open');
    const closeStatusList = filterListByStatus('close');
    setInitialIssueTpl(openStatusList, closeStatusList);
    addToggleCountEvents(openStatusList, closeStatusList);
  });
  it('라벨 버튼 클릭 시에 component 파일들을 불러온다.', () => {
    LabelButton.addEvent();
    const $labelBtn = $('#label-btn');
    $labelBtn.dispatchEvent(Event.click);
    vi.spyOn(LabelButton, 'getDynamicImportedComponents');
    expect(LabelButton.getDynamicImportedComponents).toHaveBeenCalledTimes(1);
  });
});
