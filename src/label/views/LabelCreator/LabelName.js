import { $, debounce } from '../../../utils';

class LabelName {
  static init({ creatorModel }) {
    const debounceSetLabelProperty = debounce((e) => {
      creatorModel.setLabelProperty({ name: e.target.value });
    });

    $('#label-name-input').addEventListener('input', debounceSetLabelProperty);
  }
}

export default LabelName;
