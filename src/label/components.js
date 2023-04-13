import { $, request } from '../utils';
import { getLabelItemTpl, getLabelTpl } from '../tpl.js';
import { labelFormStore, labelListStore } from '../store/labelStore.js';

export class LabelButton {
  addEvent() {
    const labelBtn = $('#label-btn');
    labelBtn.addEventListener('click', () => {
      $('#app').innerHTML = getLabelTpl();
      this.initLabelPage();
    });
  }
  initLabelPage() {
    const labelForm = LabelForm();
    labelForm.init();
    new LabelList({
      setList: labelListStore.setLabelList,
      subscribe: labelListStore.subscribe,
    });
    new NewLabelBtn({
      subscribe: labelFormStore.subscribe,
      toggleFormOpened: labelFormStore.toggleFormOpened,
      revealForm: labelForm.revealForm,
      hideForm: labelForm.hideForm,
    });
  }
}

const LabelForm = (selector = '#new-label-form') => {
  const $target = $(selector);
  return {
    $target,
    init() {
      new LabelNameInput({
        changeLabelName: labelFormStore.changeLabelName,
        subscribe: labelListStore.subscribe,
      });
      new LabelDescriptionInput({
        changeLabelDescription: labelFormStore.changeLabelDescription,
        subscribe: labelFormStore.subscribe,
      });
      new ColorInput({
        subscribe: labelFormStore.subscribe,
        changeColor: labelFormStore.changeColor,
      });
      new LabelPreview({ subscribe: labelFormStore.subscribe });
      new CreateButton({ subscribe: labelFormStore.subscribe });
    },
    revealForm() {
      $target.classList.remove('hidden');
    },
    hideForm() {
      $target.classList.add('hidden');
    },
  };
};

export class LabelList {
  $target;
  constructor({ selector = '.label-list', setList, subscribe }) {
    this.$target = $(selector);
    subscribe((state) => this.render(state.labelList));
    request('../data-sources/labels.json').then((res) => {
      setList(res);
    });
  }
  render(labelList) {
    const labelListTpl = labelList.reduce(
      (acc, curr) =>
        (acc += getLabelItemTpl({
          name: curr.name,
          color: curr.color,
          description: curr.description,
        })),
      '',
    );
    this.$target.innerHTML = labelListTpl;
  }
}

export class NewLabelBtn {
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

class ColorInput {
  $target;
  constructor({ selector = '#new-label-color', subscribe, changeColor }) {
    this.$target = $(selector);
    this.addEvent(changeColor);
    subscribe((state) => this.render(state.labelColors[state.labelColorIdx]));
  }
  addEvent(clickEventHandler) {
    this.$target.addEventListener('click', () => {
      clickEventHandler();
    });
  }
  render(selectedColor) {
    this.$target.style.backgroundColor = selectedColor;
  }
}

class TextInput {
  $target;
  constructor({ selector, inputChangeHandler }) {
    this.$target = $(selector);
    this.addEvent(inputChangeHandler);
  }
  addEvent(inputChangeHandler) {
    this.$target.addEventListener('change', (event) => {
      inputChangeHandler(event.target.value);
    });
  }
  render(text) {
    this.$target.innerText = text;
  }
}

class LabelNameInput extends TextInput {
  constructor({ selector = '#label-name-input', changeLabelName, subscribe }) {
    super({ selector, inputChangeHandler: changeLabelName });
    subscribe((state) => this.render(state.labelName));
  }
}

class LabelDescriptionInput extends TextInput {
  constructor({
    selector = '#label-description-input',
    changeLabelDescription,
    subscribe,
  }) {
    super({ selector, inputChangeHandler: changeLabelDescription });
    subscribe((state) => this.render(state.labelDescription));
  }
}

class LabelPreview {
  $target;
  constructor({ selector = '#label-preview', subscribe }) {
    this.$target = $(selector);
    subscribe((state) =>
      this.render({
        color: state.labelColors[state.labelColorIdx],
        labelName: state.labelName,
      }),
    );
  }
  render({ labelName, color }) {
    this.$target.style.backgroundColor = color;
    this.$target.innerText = labelName;
  }
}

class CreateButton {
  $target;
  constructor({ selector = '#label-create-button', subscribe }) {
    this.$target = $(selector);
    this.addEvent();
    subscribe((state) => state.labelName && this.render());
  }
  addEvent() {
    this.$target.addEventListener('click', (e) => {
      e.preventDefault();
      const formState = labelFormStore.getState();
      labelListStore.addLabelList({
        name: formState.labelName,
        color: formState.labelColors[formState.labelColorIdx].slice(1),
        description: formState.labelDescription,
      });
      labelFormStore.resetLabelState();
    });
  }

  render() {
    this.$target.disabled = false;
    this.$target.classList.remove('opacity-50');
  }
}
