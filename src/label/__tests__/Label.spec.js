import { describe, expect, it } from 'vitest';
import Label from '../views/Label';
import Store from '../store';

describe('label/views/Label', () => {
  it('라벨 목록 및 새 라벨 생성(new label) 버튼이 있는 label의 화면이 노출된다', () => {
    // given
    const $labelWrapper = document.querySelector('#label-wrapper');
    const $labelList = document.querySelector('.label-list');
    const $newLabelButton = document.querySelector('.new-label-button');

    // when
    Label(Store).render();

    // then
    expect($labelWrapper).toBeDefined();
    expect($labelList).toBeDefined();
    expect($newLabelButton).toBeDefined();
  });

  it('new label 버튼을 클릭하면, 새 라벨을 생성할 수 있는 LabelCreator가 노출된다', () => {
    // given
    const $newLabelButton = document.querySelector('.new-label-button');
    const $labelCreator = document.querySelector('#new-label-form');

    // when
    $newLabelButton.dispatchEvent(new window.MouseEvent('click'));

    // then
    const sut = $labelCreator.classList.contains('hidden');
    expect(sut).toBe(false);
  });
});
