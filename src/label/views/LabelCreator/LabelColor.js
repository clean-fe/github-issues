import { $ } from '../../../utils';
import Store from '../../store';

const getRandomColor = (labelList) => {
  const colorList = labelList.map(({ color }) => color);
  const color = '#' + colorList[Math.floor(Math.random() * colorList.length)];
  return color;
};

const LabelColor = () => {
  const STATE_KEY = {
    newLabel: 'newLabel',
    labelList: 'labelList',
  };

  $('#new-label-color').addEventListener('click', ({ target }) => {
    const labelListStore = Store(STATE_KEY.labelList);
    const newLabelStore = Store(STATE_KEY.newLabel);

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
