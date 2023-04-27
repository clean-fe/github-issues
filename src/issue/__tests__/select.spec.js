import { describe, expect, it } from 'vitest';
import { filterStatus, mapIssue } from '../select';
import { FIXTURE_ISSUE_LIST } from './issue.fixture';

describe('issue/select', () => {
  it.each(['open', 'close'])('issue 목록 중 %s 상태만 필터링하여 반환한다', (status) => {
    // given
    const list = [...FIXTURE_ISSUE_LIST];

    // when
    const filteredList = filterStatus(status)(list);

    // then
    const sut = filteredList.every((item) => item.status === status);
    expect(sut).toBe(true);
  });

  it('issue 목록을 받아서, title, tags, _id, status, openDate, milestones 만 반환한다', () => {
    // given
    const list = [...FIXTURE_ISSUE_LIST];

    // when
    const expectedList = mapIssue(list);

    // then
    const sut = expectedList.every((item) => {
      const keys = Object.keys(item);
      return (
        keys.length === 6 &&
        keys.every((key) =>
          ['title', 'tags', '_id', 'status', 'openDate', 'milestones'].includes(key),
        )
      );
    });
    expect(sut).toBe(true);
  });
});
