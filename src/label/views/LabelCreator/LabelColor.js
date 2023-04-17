import { $ } from '../../../utils';
import Store from '../../store';

const getRandColor = () => {
  const colorList = Store.getState('labelList').map(({ color }) => color);
  const color = '#' + colorList[Math.floor(Math.random() * colorList.length)];
  return color;
};

const LabelColor = () => {
  const STATE_KEY = 'newLabel';

  $('#new-label-color').addEventListener('click', ({ target }) => {
    const color = getRandColor();
    target.style.backgroundColor = color;
    $('#label-preview').style.backgroundColor = color;
    $('#label-color-value').value = color;

    Store.setState(STATE_KEY, {
      ...Store.getState(STATE_KEY),
      color,
    });
  });
};

export default LabelColor;
