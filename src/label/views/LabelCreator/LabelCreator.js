import { $ } from '../../../utils/dom';
import CreateButton from '../CreateButton';

class LabelCreator {
  constructor({ creatorModel, listModel }) {
    creatorModel.subscribe(this.render.bind(this, { creatorModel, listModel }));
    $('#new-label-form').classList.remove('hidden');
    this.init({ creatorModel, listModel });
  }

  #addEvent($target, eventType, handler) {
    $target.addEventListener(eventType, handler);
  }

  init({ creatorModel, listModel }) {
    this.#addEvent($('#label-name-input'), 'input', ({ target }) => {
      creatorModel.setLabelProperty({ name: target.value });
    });

    this.#addEvent($('#label-description-input'), 'input', ({ target }) => {
      creatorModel.setLabelProperty({ description: target.value });
    });

    this.#addEvent($('#new-label-color'), 'click', ({ target }) => {
      const color =
        '#' + listModel.labelList[Math.floor(Math.random() * listModel.labelList.length)].color;
      target.style.backgroundColor = color;
      $('#label-preview').style.backgroundColor = color;
      $('#label-color-value').value = color;

      creatorModel.setLabelProperty({ color });
    });
  }

  render({ creatorModel, listModel }) {
    if (creatorModel.isAllInputFilled) {
      new CreateButton({ creatorModel, listModel });
    }
  }
}

export default LabelCreator;
