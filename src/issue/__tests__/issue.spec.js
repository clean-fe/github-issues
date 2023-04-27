import { describe, it, expect } from 'vitest';
import { HANDLER_ISSUES } from '../../__mock_data__/handlers';
import { server } from '../../__mock_data__/server';
import setIssueOnDocument from '../issue';

describe('issue/issue', () => {
  it('데이터 응답이 성공 + issue 목록이 있으면, issue 목록이 나열된 화면이 노출된다', async () => {
    // given
    server.use(HANDLER_ISSUES.getSuccess);

    // when
    await setIssueOnDocument();

    // then
    const sut = document.querySelector('#issue-wrapper');
    expect(sut).toBeDefined();
  });
});
