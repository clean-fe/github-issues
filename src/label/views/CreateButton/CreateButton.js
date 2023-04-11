import { $ } from '../../../utils';

class CreateButton {
  constructor({ listModel, creatorModel }) {
    this.render({ listModel, creatorModel });
  }

  render({ listModel, creatorModel }) {
    const $button = $('#label-create-button');
    $button.disabled = false;
    $button.classList.remove('opacity-50');
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      listModel.addLabel(creatorModel.newLabel);
      debugger;
    });
  }
}

export default CreateButton;
