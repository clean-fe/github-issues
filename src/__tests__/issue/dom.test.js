import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { $, fetcher, pipe } from '../../utils/index.js';
import { filterStatus, mapIssue } from '../../issue/api.js';
import { setInitialIssueTpl } from '../../issue/render.js';
import { addToggleCountEvents } from '../../issue/event.js';

const ISSUE_URL = 'http://localhost:3000/issues';
const getAsyncDataPipe = pipe(fetcher, mapIssue);

describe('초기 로딩시에 헤더 영역에 opens, closed 갯수를 올바르게 표시한다.', async () => {
  let list;
  beforeAll(async () => {
    list = await getAsyncDataPipe({ url: ISSUE_URL });
  });
  it('초기 로딩시에 데이터를 페칭한다..', () => {
    expect(typeof list).toBe('object');
    expect(list).length(4);
  });

  it('데이터를 필터링한다.', () => {
    const filterListByStatus = filterStatus(list);
    expect(filterListByStatus('open')).length(3);
    expect(filterListByStatus('close')).length(1);
    expect(
      filterListByStatus('open').length + filterListByStatus('close').length,
    ).toEqual(list.length);
  });

  it('필터링한 데이터의 상태에 따른 개수를 표시한다.', () => {
    const filterListByStatus = filterStatus(list);
    const openStatusList = filterListByStatus('open');
    const closeStatusList = filterListByStatus('close');

    setInitialIssueTpl(openStatusList, closeStatusList);

    expect(document.querySelector('.open-count').innerHTML).toEqual('3 Opens');
    expect(document.querySelector('.close-count').innerHTML).toEqual(
      '1 Closed',
    );
  });
});

describe('본문 영역에 issue 리스트를 표시한다.', () => {
  let openStatusList, closeStatusList;
  beforeAll(async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
    const filterListByStatus = filterStatus(list);
    openStatusList = filterListByStatus('open');
    closeStatusList = filterListByStatus('close');
    setInitialIssueTpl(openStatusList, closeStatusList);
    addToggleCountEvents(openStatusList, closeStatusList);
  });
  it('본문 영역에 열려있는 리스트 li가 들어간다.', () => {
    expect($('#issues').childElementCount).toEqual(3);
  });

  it('이벤트 등록 이후에는 closed 버튼을 누르면 closed 리스트가 보인다.', () => {
    const event = new window.Event('click');
    const closedCountBtn = document.querySelector('.close-count');
    closedCountBtn.dispatchEvent(event);

    expect($('#issues').childElementCount).toEqual(1);
  });
});
