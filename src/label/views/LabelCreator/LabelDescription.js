import { $ } from '../../../utils';

class LabelDescription {
  constructor({ creatorModel }) {
    this.init({ creatorModel });
  }

  init({ creatorModel }) {
    $('#label-description-input').addEventListener('input', ({ target }) => {
      creatorModel.setLabelProperty({ description: target.value });
    });
  }
}

export default LabelDescription;
