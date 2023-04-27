import { beforeAll, describe, expect, it } from 'vitest';
import LabelList from '../views/LabelList';
import Store from '../store';
import { server } from '../../__mock_data__/server';
import { HANDLER_LABELS } from '../../__mock_data__/handlers';
import { getLabelTpl } from '../../tpl';

describe('label/views/LabelList', () => {
  beforeAll(() => {
    document.querySelector('#app').innerHTML = getLabelTpl();
  });

  it('label 목록을 응답받고, 각 항목을 li 태그에 매핑하여 .label-list 엘리먼트의 하위에 노출시킨다', async () => {
    // given
    server.use(HANDLER_LABELS.getSuccess);

    // when
    await LabelList(Store).render();

    // then
    const $labelList = document.querySelector('.label-list');
    const sut = $labelList.querySelectorAll('li').length;
    expect(sut).toBeGreaterThan(0);
  });
});
