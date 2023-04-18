import { $, debounce } from '../../../utils';
import Store from '../../store';

const LabelProperty = (propType) => () => {
  const STATE_KEY = 'newLabel';
  const store = Store(STATE_KEY);

  const debounceSetLabelProperty = debounce((e) => {
    e.preventDefault();

    store.setState({
      ...store.getState(),
      [propType]: e.target.value,
    });
  });

  $(`#label-${propType}-input`).addEventListener('input', debounceSetLabelProperty);
};

export default LabelProperty;
