import { describe, expect, it } from 'vitest';
import LabelList from '../views/LabelList';
import Store from '../store';
import { server } from '../../__mock_data__/server';
import { HANDLER_LABELS } from '../../__mock_data__/handlers';
import { getLabelTpl } from '../../tpl';

describe('label/views/LabelList', () => {
  it('서버로부터 label 목록 데이터를 받으면, 각 항목은 li 태그에 매핑되어 .label-list 엘리먼트의 하위에 노출된다', async () => {
    // given
    server.use(HANDLER_LABELS.getSuccess);
    document.querySelector('#app').innerHTML = getLabelTpl();

    // when
    await LabelList(Store).render();

    // then
    const $labelList = document.querySelector('.label-list');
    const sut = $labelList.querySelectorAll('li').length;
    expect(sut).toBeGreaterThan(0);
  });
});
