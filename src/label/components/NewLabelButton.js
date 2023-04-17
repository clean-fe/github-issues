import { $ } from '../../utils/index.js';

class NewLabelBtn {
  $target;

  constructor({
    selector = '.new-label-button',
    subscribe,
    toggleFormOpened,
    revealForm,
    hideForm,
  }) {
    this.$target = $(selector);
    this.addEvent(toggleFormOpened);

    subscribe((state) => (state.isFormOpened ? revealForm() : hideForm()));
  }
  addEvent(clickEventHandler) {
    this.$target.addEventListener('click', () => {
      clickEventHandler();
    });
  }
}

export default NewLabelBtn;
