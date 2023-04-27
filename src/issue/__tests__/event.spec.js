import { describe, it, expect, beforeAll } from 'vitest';
import { addToggleCountEvent } from '../event';
import { FIXTURE_CLOSE_STATUS_LIST, FIXTURE_OPEN_STATUS_LIST } from './issue.fixture';
import { getIssueTpl } from '../../tpl';

describe('issue/event', () => {
  beforeAll(() => {
    document.querySelector('#app').innerHTML = getIssueTpl({
      openCount: FIXTURE_OPEN_STATUS_LIST.length,
      closeCount: FIXTURE_CLOSE_STATUS_LIST.length,
    });
  });

  it.each([
    {
      state: 'closed',
      targetSelector: '.close-count',
      nonTargetSelector: '.open-count',
      list: FIXTURE_CLOSE_STATUS_LIST,
    },
    {
      state: 'open',
      targetSelector: '.open-count',
      nonTargetSelector: '.close-count',
      list: FIXTURE_OPEN_STATUS_LIST,
    },
  ])(
    '%s 누르면, 해당 상태의 라벨 목록이 노출된다',
    ({ state, targetSelector, nonTargetSelector, list }) => {
      // given
      const $target = document.querySelector(targetSelector);
      const $nonTarget = document.querySelector(nonTargetSelector);
      const $issues = document.querySelector('#issues');

      addToggleCountEvent({
        targetList: { list, selector: $issues },
        $target,
        $nonTarget,
      });

      // when
      $target.dispatchEvent(new window.MouseEvent('click'));

      // then
      const sut = $issues.querySelectorAll('li').length;
      expect(sut).toStrictEqual(list.length);
    },
  );
  it.each([
    {
      target: 'closed',
      nonTarget: 'opens',
      targetSelector: '.close-count',
      nonTargetSelector: '.open-count',
      list: FIXTURE_CLOSE_STATUS_LIST,
    },
    {
      target: 'open',
      nonTarget: 'closed',
      targetSelector: '.open-count',
      nonTargetSelector: '.close-count',
      list: FIXTURE_OPEN_STATUS_LIST,
    },
  ])(
    `%s를 클릭하면, 해당 글자는 bold 처리 되고, %s 글자는 bold 처리가 풀린다`,
    ({ target, nonTarget, targetSelector, nonTargetSelector, list }) => {
      // given
      const $target = document.querySelector(targetSelector);
      const $nonTarget = document.querySelector(nonTargetSelector);
      const $issues = document.querySelector('#issues');

      addToggleCountEvent({
        targetList: { list, selector: $issues },
        $target,
        $nonTarget,
      });

      // when
      $target.dispatchEvent(new window.MouseEvent('click'));

      // then
      const sutOfTarget = $target.classList.contains('font-bold');
      const sutOfNonTarget = $nonTarget.classList.contains('font-bold');
      expect(sutOfTarget).toBe(true);
      expect(sutOfNonTarget).toBe(false);
    },
  );
});
