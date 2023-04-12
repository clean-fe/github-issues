import { $ } from '../../../utils';

class LabelColor {
  constructor({ creatorModel, listModel }) {
    this.init({ creatorModel, listModel });
  }

  init({ creatorModel, listModel }) {
    $('#new-label-color').addEventListener('click', ({ target }) => {
      const color =
        '#' + listModel.labelList[Math.floor(Math.random() * listModel.labelList.length)].color;
      target.style.backgroundColor = color;
      $('#label-preview').style.backgroundColor = color;
      $('#label-color-value').value = color;

      creatorModel.setLabelProperty({ color });
    });
  }
}

export default LabelColor;
