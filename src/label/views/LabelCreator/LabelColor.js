import { STORE_KEY } from '../../../constants';
import { $ } from '../../../utils';

const getRandomColor = () => {
  return (
    '#' +
    Array.from({ length: 6 }, () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')
  );
};

const LabelColor = (Store) => {
  $('#new-label-color').addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;
    const newLabelStore = Store(STORE_KEY.NEW_LABEL);

    const color = getRandomColor();
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
