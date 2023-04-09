import { $, go } from '../utils';
import { getLabelItemTpl, getLabelTpl } from '../tpl.js';
import Labels from '../../data-sources/labels.json';
export class LabelButton {
  addEvent() {
    const labelBtn = $('#label-btn');
    labelBtn.addEventListener('click', () => {
      $('#app').innerHTML = getLabelTpl();
      new LabelList();
    });
  }
}

export class LabelList {
  list = [];
  constructor() {
    const labelListTpl = Labels.reduce(
      (acc, curr) =>
        (acc += getLabelItemTpl({
          name: curr.name,
          color: curr.color,
          description: curr.description,
        })),
      '',
    );
    $('.label-list').innerHTML = labelListTpl;
  }
}
