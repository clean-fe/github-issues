import { getLabelTpl } from '../../../tpl';
import { $ } from '../../../utils';
import LabelList from '../LabelList';
import LabelCreator from '../LabelCreator';
import { STORE_KEY } from '../../../constants';

class Label {
  #store;
  #STATE_KEY = STORE_KEY.IS_NEW_LABEL_CLICKED;

  constructor(Store) {
    this.#store = Store;
    this.#init();
  }

  #init() {
    this.#render();
    this.#addEventOfCreator();
  }

  #addEventOfCreator() {
    $('.new-label-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.#store(this.#STATE_KEY).setState(true);
    });
  }

  #render() {
    $('#app').innerHTML = getLabelTpl();

    new LabelList(this.#store);
    new LabelCreator(this.#store).render();
  }
}

export default Label;
