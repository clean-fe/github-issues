import { $ } from '../../../utils';
import Store from '../../store';

class CreateButton {
  #$button;
  constructor() {
    this.#$button = $('#label-create-button');
    this.#init();
  }

  #init() {
    Store.subscribe('newLabel', this.#render.bind(this));
    this.#render();
    this.#addEvent();
  }

  get #isAllInputFilled() {
    const newLabel = Store.getState('newLabel') ?? {};
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
      Store.setState('labelList', [
        ...Store.getState('labelList'), //
        Store.getState('newLabel'), //
      ]);
      // TODO: postData
      Store.setState('isNewLabelClicked', false);
      $('#new-label-form').classList.add('hidden');
    });
  }
}

export default CreateButton;
