import { $, debounce } from '../../../utils';
import Store from '../../store';

const LabelName = () => {
  const debounceSetLabelProperty = debounce((e) => {
    Store.setState('newLabel', {
      ...Store.getState('newLabel'),
      name: e.target.value,
    });
    console.log(Store.getState('newLabel'));
  });

  $('#label-name-input').addEventListener('input', debounceSetLabelProperty);
};

export default LabelName;
