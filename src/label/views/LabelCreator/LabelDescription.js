import { $, debounce } from '../../../utils';
class LabelDescription {
  static init({ creatorModel }) {
    const debounceSetLabelProperty = debounce((e) => {
      creatorModel.setLabelProperty({ description: e.target.value });
    });

    $('#label-description-input').addEventListener('input', debounceSetLabelProperty);
  }
}

export default LabelDescription;
