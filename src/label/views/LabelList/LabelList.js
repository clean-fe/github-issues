import { $, getData } from '../../../utils';
import LabelItem from './LabelItem';
import Store from '../../store';
import { API_URL } from '../../../constants';

class LabelList {
  #STATE_KEY = 'labelList';
  constructor() {
    this.#init();
  }

  async #init() {
    Store.subscribe(this.#STATE_KEY, this.#render.bind(this));
    Store.setState(this.#STATE_KEY, await getData(API_URL.LABEL));
    this.#render();
  }

  #render() {
    const $labelList = $('.label-list');
    const labelList = Store.getState(this.#STATE_KEY) ?? [];
    $labelList.innerHTML = labelList.reduce((acc, labelItem) => (acc += LabelItem(labelItem)), '');
  }
}

export default LabelList;
