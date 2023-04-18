import { getLabelTpl } from '../../../tpl';
import { $ } from '../../../utils';
import LabelList from '../LabelList';
import LabelCreator from '../LabelCreator';
import Store from '../../store';

class Label {
  #store;

  constructor() {
    this.#store = Store('isNewLabelClicked');
    this.#init();
  }

  #init() {
    this.#store.subscribe(this.#renderCreator.bind(this));
    this.#store.setState(false);
    this.#render();
    this.#addEventOfCreator();
  }

  #addEventOfCreator() {
    $('.new-label-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.#store.setState(true);
    });
  }

  #render() {
    $('#app').innerHTML = getLabelTpl();

    new LabelList();
  }

  #renderCreator() {
    this.#store.getState() && new LabelCreator();
  }
}

export default Label;
