import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelProperty from './LabelProperty';
import { $ } from '../../../utils';
import { STORE_KEY } from '../../../constants';

const LabelCreator = (Store) => {
  const init = () => {
    const newLabelClickedStore = Store(STORE_KEY.IS_NEW_LABEL_CLICKED);
    newLabelClickedStore.setState(false);
    newLabelClickedStore.subscribe(show);
    show();
  };

  const show = () => {
    const newLabelClickedStore = Store(STORE_KEY.IS_NEW_LABEL_CLICKED);
    const isNewLabelClicked = newLabelClickedStore.getState();
    isNewLabelClicked
      ? $('#new-label-form').classList.remove('hidden')
      : $('#new-label-form').classList.add('hidden');
  };

  const render = () => {
    init();

    [CreateButton, LabelProperty('name'), LabelProperty('description'), LabelColor].forEach(
      (Component) => {
        Component(Store);
      },
    );
  };

  return { render };
};

export default LabelCreator;
