import { STORE_KEY } from '../../../constants';
import { $ } from '../../../utils';

const getRandomColor = (labelList) => {
  const colorList = labelList.map(({ color }) => color);
  const color = '#' + colorList[Math.floor(Math.random() * colorList.length)];
  return color;
};

const LabelColor = (Store) => {
  $('#new-label-color').addEventListener('click', ({ target }) => {
    const labelListStore = Store(STORE_KEY.LABEL_LIST);
    const newLabelStore = Store(STORE_KEY.NEW_LABEL);

    const color = getRandomColor(labelListStore.getState());
    target.style.backgroundColor = color;
    $('#label-preview').style.backgroundColor = color;
    $('#label-color-value').value = color;

    newLabelStore.setState({
      ...newLabelStore.getState(),
      color,
    });
  });
};

export default LabelColor;
