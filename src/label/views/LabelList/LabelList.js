import { $ } from '../../../utils';
import LabelItem from '../LabelItem';

class LabelList {
  constructor({ listModel }) {
    listModel.subscribe(this.render.bind(this));
    this.render(listModel.labelList);
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
