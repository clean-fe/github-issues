import { $, getData } from '../../../utils';
import LabelItem from './LabelItem';
import Store from '../../store';
import { API_URL } from '../../../constants';

class LabelList {
  constructor() {
    this.#init();
  }

  async #init() {
    Store.subscribe('labelList', this.render.bind(this));
    Store.setState('labelList', await getData(API_URL.LABEL));
    this.render();
  }

  render() {
    const $labelList = $('.label-list');
    const labelList = Store.getState('labelList') ?? [];
    $labelList.innerHTML = labelList.reduce((acc, labelItem) => (acc += LabelItem(labelItem)), '');
  }
}

export default LabelList;
