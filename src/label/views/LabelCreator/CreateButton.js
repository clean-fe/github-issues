import { $, postData } from '../../../utils';
import Store from '../../store';
import { API_URL } from '../../../constants';

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
    const newLabelList = [...labelListStore.getState(), newLabelStore.getState()];

    postData({
      url: API_URL.LABEL,
      bodyData: newLabelList,
      onError: (response) => {
        console.error(response);
        alert('라벨 생성에 실패했습니다.');
      },
      onSuccess: () => {
        labelListStore.setState(newLabelList);
      },
      onSettled: () => {
        isNewLabelClickedStore.setState(false);
      },
    });
  });
};

export default CreateButton;
