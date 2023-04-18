import { $, postData } from '../../../utils';
import { API_URL, STORE_KEY } from '../../../constants';

const isAllInputFilled = (newLabel) => {
  const { name, description, color } = newLabel;
  return name && description && color;
};

const CreateButton = (Store) => {
  const [$button, newLabelStore, labelListStore, isNewLabelClickedStore] = [
    $('#label-create-button'),
    Store(STORE_KEY.NEW_LABEL),
    Store(STORE_KEY.LABEL_LIST),
    Store(STORE_KEY.IS_NEW_LABEL_CLICKED),
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
