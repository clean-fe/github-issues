import { $ } from '../../../utils';
import Store from '../../store';

const getRandColor = () => {
  const colorList = Store.getState('labelList').map(({ color }) => color);
  const color = '#' + colorList[Math.floor(Math.random() * colorList.length)];
  return color;
};

const LabelColor = () => {
  $('#new-label-color').addEventListener('click', ({ target }) => {
    const color = getRandColor();
    target.style.backgroundColor = color;
    $('#label-preview').style.backgroundColor = color;
    $('#label-color-value').value = color;

    Store.setState('newLabel', {
      ...Store.getState('newLabel'),
      color,
    });
    console.log(Store.getState('newLabel'));
  });
};

export default LabelColor;
