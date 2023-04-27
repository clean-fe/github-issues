import { describe, it, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import setIssueOnDocument from '../issue';
import { FIXTURE_ISSUE_LIST } from './issue.fixture';

const fetchMocker = createFetchMock(vi);

describe('issue/issue', () => {
  fetchMocker.enableMocks();
  it('issue 화면이 노출된다', async () => {
    // given
    fetch.mockResponseOnce(JSON.stringify([...FIXTURE_ISSUE_LIST]));

    // when
    await setIssueOnDocument();

    // then
    const sut = document.querySelector('#issue-wrapper');
    expect(sut).not.toBeFalsy();
  });
});
