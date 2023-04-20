import { $, getData } from '../../../utils';
import LabelItem from './LabelItem';
import { API_URL, STORE_KEY } from '../../../constants';

class LabelList {
  #store;
  #STATE_KEY = STORE_KEY.LABEL_LIST;

  constructor(Store) {
    this.#store = Store;
    this.#init();
  }

  async #init() {
    const labelListStore = this.#store(this.#STATE_KEY);
    labelListStore.setState(await getData(API_URL.LABEL));
    labelListStore.subscribe(this.#render.bind(this));
    this.#render();
  }

  #render() {
    const $labelList = $('.label-list');
    const labelList = this.#store(this.#STATE_KEY).getState() ?? [];
    $labelList.innerHTML = labelList.reduce((acc, labelItem) => (acc += LabelItem(labelItem)), '');
  }
}

export default LabelList;
