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

  // NOTE: 거짓 양성 혹은 document가 제대로 반영되지 않는 문제
  it('LabelList는 label 목록을 응답받고, 각 label 항목을 li 태그에 매핑하여 .label-list 엘리먼트의 하위에 노출시킨다', () => {
    // given
    server.use(HANDLER_LABELS.getSuccess);

    // when
    new LabelList(Store);

    // then
    const $labelList = document.querySelector('.label-list');
    const sut = $labelList.querySelectorAll('li').length;
    expect(sut).toBeGreaterThan(0);
  });
});
