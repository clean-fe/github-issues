import { getLabelTpl } from '../../../tpl';
import { $ } from '../../../utils';
import LabelList from '../LabelList';
import LabelCreator from '../LabelCreator';
import Store from '../../store';

const STATE_KEY = 'isNewLabelClicked';

class Label {
  constructor() {
    this.#init();
  }

  #init() {
    Store.subscribe(STATE_KEY, this.#renderCreator.bind(this));
    this.render();
    this.#addEventOfCreator();
  }

  #addEventOfCreator() {
    $('.new-label-button').addEventListener('click', (e) => {
      e.preventDefault();
      Store.setState(STATE_KEY, true);
    });
  }

  render() {
    $('#app').innerHTML = getLabelTpl();

    new LabelList();
  }

  #renderCreator() {
    Store.getState(STATE_KEY) && new LabelCreator();
  }
}

export default Label;
