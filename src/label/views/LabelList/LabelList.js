import { $ } from '../../../utils';
import LabelItem from './LabelItem';

class LabelList {
  constructor({ model }) {
    model.subscribe(this.render.bind(this));
    this.render(model.labelList);
  }

  render(labelList) {
    const $labelList = $('.label-list');
    $labelList.innerHTML = labelList.reduce(
      (acc, labelItem) => (acc += LabelItem.render(labelItem)),
      '',
    );
  }
}

export default LabelList;
