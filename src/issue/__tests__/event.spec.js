import { describe, it, expect } from 'vitest';
import { getIssueTpl } from '../../tpl';
import { addToggleCountEvent } from '../event';
import { MOCK_CLOSE_STATUS_LIST, MOCK_OPEN_STATUS_LIST } from './issue.fixture';
import { JSDOM } from 'jsdom';

describe('issue/event', () => {
  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="app">${getIssueTpl({
          openCount: MOCK_OPEN_STATUS_LIST.length,
          closeCount: MOCK_CLOSE_STATUS_LIST.length,
        })}</div>
      </body>
    </html>  
`;

  const { window } = new JSDOM(html);
  const { document } = window;

  it.each([
    ['closed', '.close-count', '.open-count', MOCK_CLOSE_STATUS_LIST],
    ['open', '.open-count', '.close-count', MOCK_OPEN_STATUS_LIST],
  ])(
    '%s 누르면, 해당 상태의 라벨 목록이 노출된다',
    (state, targetSelector, nonTargetSelector, list) => {
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
      expect($issues.querySelectorAll('li').length).toEqual(list.length);
    },
  );
  it.each([
    ['closed', 'opens', '.close-count', '.open-count', MOCK_CLOSE_STATUS_LIST],
    ['open', 'closed', '.open-count', '.close-count', MOCK_OPEN_STATUS_LIST],
  ])(
    `%s를 클릭하면, 해당 글자는 bold 처리 되고, %s 글자는 bold 처리가 풀린다`,
    (target, nonTarget, targetSelector, nonTargetSelector, list) => {
      // given

      const $target = document.querySelector(targetSelector);
      const $nonTarget = document.querySelector(nonTargetSelector);

      addToggleCountEvent({
        targetList: list,
        $target,
        $nonTarget,
      });

      // when
      $target.dispatchEvent(new window.MouseEvent('click'));

      // then
      expect($target.classList.contains('font-bold')).toEqual(true);
    },
  );
});
