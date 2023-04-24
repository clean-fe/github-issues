import { describe, it, expect } from 'vitest';
import { fetcher, pipe } from '../../utils/index.js';
import { filterStatus, mapIssue } from '../../issue/api.js';
import { setInitialIssueTpl } from '../../issue/render.js';

describe('초기 로딩시에 헤더 영역에 opens, closed 갯수를 올바르게 표시', () => {
  const ISSUE_URL = 'http://localhost:3000/issues';
  const getAsyncDataPipe = pipe(fetcher, mapIssue);

  it('초기 로딩시에 데이터를 페칭한다..', async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
    expect(typeof list).toBe('object');
    expect(list).length(4);
  });

  it('데이터를 필터링한다.', async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
    const filterListByStatus = filterStatus(list);
    expect(filterListByStatus('open')).length(3);
    expect(filterListByStatus('close')).length(1);
    expect(
      filterListByStatus('open').length + filterListByStatus('close').length,
    ).toEqual(list.length);
  });

  it('필터링한 데이터의 개수를 표시한다.', async () => {
    const list = await getAsyncDataPipe({ url: ISSUE_URL });
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
