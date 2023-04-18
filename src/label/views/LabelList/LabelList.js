import { $, getData } from '../../../utils';
import LabelItem from './LabelItem';
import Store from '../../store';
import { API_URL } from '../../../constants';

class LabelList {
  #STATE_KEY = 'labelList';
  #store;
  constructor() {
    this.#store = Store(this.#STATE_KEY);
    this.#init();
  }

  async #init() {
    this.#store.setState(await getData(API_URL.LABEL));
    this.#store.subscribe(this.#render.bind(this));
    this.#render();
  }

  #render() {
    const $labelList = $('.label-list');
    const labelList = this.#store.getState() ?? [];
    $labelList.innerHTML = labelList.reduce((acc, labelItem) => (acc += LabelItem(labelItem)), '');
  }
}

export default LabelList;
