import { $, debounce } from '../../../utils';
import Store from '../../store';

const LabelProperty = (propType) => () => {
  const STATE_KEY = 'newLabel';

  const debounceSetLabelProperty = debounce((e) => {
    const store = Store(STATE_KEY);
    store.setState({
      ...store.getState(),
      [propType]: e.target.value,
    });
  });

  $(`#label-${propType}-input`).addEventListener('input', debounceSetLabelProperty);
};

export default LabelProperty;
