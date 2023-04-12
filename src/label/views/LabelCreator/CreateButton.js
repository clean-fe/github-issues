import { $ } from '../../../utils';

class CreateButton {
  constructor({ listModel, creatorModel }) {
    this.#init({ listModel, creatorModel });
  }

  #init({ listModel, creatorModel }) {
    const $button = $('#label-create-button');
    $button.disabled = false;
    $button.classList.remove('opacity-50');
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      listModel.addLabel(creatorModel.newLabel);
    });
  }
}

export default CreateButton;
