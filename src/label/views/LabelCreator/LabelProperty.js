import { $, debounce } from '../../../utils';
import Store from '../../store';

const LabelProperty = (propType) => () => {
  const STATE_KEY = 'newLabel';

  const debounceSetLabelProperty = debounce((e) => {
    Store.setState(STATE_KEY, {
      ...Store.getState(STATE_KEY),
      [propType]: e.target.value,
    });
  });

  $(`#label-${propType}-input`).addEventListener('input', debounceSetLabelProperty);
};

export default LabelProperty;
