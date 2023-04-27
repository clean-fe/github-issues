import { describe, it, expect } from 'vitest';
import { setInitialIssueTpl, setIssueListTpl } from '../render';
import { FIXTURE_OPEN_STATUS_LIST, FIXTURE_CLOSE_STATUS_LIST } from './issue.fixture';
import { getIssueTpl } from '../../tpl';

describe('issue/render', () => {
  beforeAll(() => {
    document.querySelector('#app').innerHTML = getIssueTpl({
      openCount: FIXTURE_OPEN_STATUS_LIST.length,
      closeCount: FIXTURE_CLOSE_STATUS_LIST.length,
    });
  });
  it('issue 목록을 넣으면, 각 아이템이 li 태그로 매핑되어 #issues 엘리먼트의 하위에 작성된다', () => {
    // given
    const list = [...FIXTURE_OPEN_STATUS_LIST];
    const $issues = document.querySelector('#issues');

    // when
    setIssueListTpl(list)($issues);

    // then
    const sut = $issues.querySelectorAll('li').length;
    expect(sut).toStrictEqual(list.length);
  });

  it('issue 화면이 처음 열리면, open 상태의 issue 목록이 노출된다', () => {
    // given
    const $issues = document.querySelector('#issues');

    // when
    setInitialIssueTpl(FIXTURE_OPEN_STATUS_LIST, FIXTURE_CLOSE_STATUS_LIST);

    // then
    const sut = Array.from($issues.querySelectorAll('li'))
      .map((item) => item.querySelector('.issue-description').textContent)
      .every((text) => text.includes('opened'));

    expect(sut).toBe(true);
  });
});
