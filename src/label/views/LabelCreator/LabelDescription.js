import { $, debounce } from '../../../utils';
import Store from '../../store';

const LabelDescription = () => {
  const debounceSetLabelProperty = debounce((e) => {
    Store.setState('newLabel', {
      ...Store.getState('newLabel'),
      description: e.target.value,
    });
    console.log(Store.getState('newLabel'));
  });

  $('#label-description-input').addEventListener('input', debounceSetLabelProperty);
};

export default LabelDescription;
