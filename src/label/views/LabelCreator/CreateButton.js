import { $ } from '../../../utils';
import Store from '../../store';

class CreateButton {
  #$button;
  #STATE_KEY = {
    newLabel: 'newLabel',
    labelList: 'labelList',
    isNewLabelClicked: 'isNewLabelClicked',
  };
  constructor() {
    this.#$button = $('#label-create-button');
    this.#init();
  }

  #init() {
    Store.subscribe(this.#STATE_KEY.newLabel, this.#render.bind(this));
    this.#render();
    this.#addEvent();
  }

  get #isAllInputFilled() {
    const newLabel = Store.getState(this.#STATE_KEY.newLabel) ?? {};
    const { name, description, color } = newLabel;
    return name && description && color;
  }

  #render() {
    if (!this.#isAllInputFilled) return;
    this.#$button.disabled = false;
    this.#$button.classList.remove('opacity-50');
  }

  #addEvent() {
    this.#$button.addEventListener('click', (e) => {
      e.preventDefault();
      Store.setState(this.#STATE_KEY.labelList, [
        ...Store.getState(this.#STATE_KEY.labelList), //
        Store.getState(this.#STATE_KEY.newLabel), //
      ]);
      // TODO: postData, newLabel reset
      Store.setState(this.#STATE_KEY.isNewLabelClicked, false);
      $('#new-label-form').classList.add('hidden');
    });
  }
}

export default CreateButton;
