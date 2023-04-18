import { $ } from '../../../utils';
import Store from '../../store';

const STATE_KEY = {
  newLabel: 'newLabel',
  labelList: 'labelList',
  isNewLabelClicked: 'isNewLabelClicked',
};

const isAllInputFilled = (newLabel) => {
  const { name, description, color } = newLabel;
  return name && description && color;
};

const CreateButton = () => {
  const [$button, newLabelStore, labelListStore, isNewLabelClickedStore] = [
    $('#label-create-button'),
    Store(STATE_KEY.newLabel),
    Store(STATE_KEY.labelList),
    Store(STATE_KEY.isNewLabelClicked),
  ];

  newLabelStore.subscribe(() => {
    if (!isAllInputFilled(newLabelStore.getState() ?? {})) return;
    $button.disabled = false;
    $button.classList.remove('opacity-50');
  });

  $button.addEventListener('click', (e) => {
    e.preventDefault();

    labelListStore.setState([
      ...labelListStore.getState(), //
      newLabelStore.getState(), //
    ]);
    isNewLabelClickedStore.setState(false);
  });
};

export default CreateButton;
