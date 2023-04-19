import { $, fetcher } from '../../utils/index.js';
import { getLabelItemTpl } from '../../tpl.js';

class LabelList {
  $target;
  constructor({ selector = '.label-list', setList, subscribe }) {
    this.$target = $(selector);
    subscribe((state) => this.render(state.labelList));
    this.makeListByApi(setList);
  }

  makeListByApi(setList) {
    fetcher({ url: '/labels' }).then((res) => {
      setList(res);
    });
  }

  render(labelList) {
    const labelListTpl = labelList.reduce(
      (acc, curr) =>
        (acc += getLabelItemTpl({
          name: curr.name,
          color: curr.color,
          description: curr.description,
        })),
      '',
    );
    this.$target.innerHTML = labelListTpl;
  }
}

export default LabelList;
