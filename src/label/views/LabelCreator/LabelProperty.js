import { STORE_KEY } from '../../../constants';
import { $, debounce } from '../../../utils';

const LabelProperty = (propType) => (Store) => {
  const store = Store(STORE_KEY.NEW_LABEL);

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
