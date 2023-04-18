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
    const store = this.#store(this.#STATE_KEY);
    store.subscribe(this.#renderCreator.bind(this));
    store.setState(false);
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
  }

  #renderCreator() {
    const isNewLabelClicked = this.#store(this.#STATE_KEY).getState();
    isNewLabelClicked && new LabelCreator(this.#store);
  }
}

export default Label;
