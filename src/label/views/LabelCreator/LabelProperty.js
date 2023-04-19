import { STORE_KEY } from '../../../constants';
import { $, debounce } from '../../../utils';

const LabelProperty = (propType) => (Store) => {
  const newLabelStore = Store(STORE_KEY.NEW_LABEL);

  const debounceSetLabelProperty = debounce((e) => {
    e.preventDefault();

    newLabelStore.setState({
      ...newLabelStore.getState(),
      [propType]: e.target.value,
    });
  });

  $(`#label-${propType}-input`).addEventListener('input', debounceSetLabelProperty);
};

export default LabelProperty;
