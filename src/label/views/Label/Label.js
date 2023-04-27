import { getLabelTpl } from '../../../tpl';
import { $ } from '../../../utils';
import LabelList from '../LabelList';
import LabelCreator from '../LabelCreator';
import { STORE_KEY } from '../../../constants';

const Label = (Store) => {
  const addEvent = () => {
    const $newLabelButton = $('.new-label-button');
    $newLabelButton.addEventListener('click', (e) => {
      e.preventDefault();
      Store(STORE_KEY.IS_NEW_LABEL_CLICKED).setState(true);
    });
  };

  const init = () => {
    const isNewLabelClickedStore = Store(STORE_KEY.IS_NEW_LABEL_CLICKED);
    isNewLabelClickedStore.subscribe(render);
  };

  const render = () => {
    init();

    $('#app').innerHTML = getLabelTpl();

    LabelList(Store).render();
    LabelCreator(Store).render();

    addEvent();
  };

  return { render };
};

export default Label;
