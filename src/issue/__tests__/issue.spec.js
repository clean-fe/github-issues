import { describe, it } from 'vitest';
import { HANDLER_ISSUES } from '../../__mock_data__/handlers';
import { server } from '../../__mock_data__/server';
import setIssueOnDocument from '../issue';

describe('issue/issue', () => {
  it('issue 화면이 노출된다', async () => {
    // given
    server.use(HANDLER_ISSUES.getSuccess);

    // when
    await setIssueOnDocument();

    // then
    const sut = document.querySelector('#issue-wrapper');
    expect(sut).not.toBeFalsy();
  });
});
