import { $, request } from '../utils';
import { getLabelItemTpl, getLabelTpl } from '../tpl.js';
import { create, observable, observe } from '../core/observer.js';
import { LabelStore } from '../store/labelStore.js';
import { LabelColor } from '../constant.js';
export class LabelButton {
  addEvent() {
    const labelBtn = $('#label-btn');
    labelBtn.addEventListener('click', () => {
      $('#app').innerHTML = getLabelTpl();
      new LabelList();
      // new NewLabelBtn('.new-label-button').addEvent();
      // new ColorInput('#new-label-color').addEvent();
      // new LabelPreview('#label-preview');
    });
  }
}

export class LabelList {
  store = {};
  constructor() {
    this.store = create((set) => ({
      labelList: [],
      addLabelList: (newLabel) =>
        set((state) => ({ labelList: [...state.labelList, newLabel] })),
    }));
    this.store.subscribe((state) => this.render(state.labelList));
    request('../data-sources/labels.json').then((res) => {
      this.store.setState((state) => ({
        ...state,
        labelList: res,
      }));
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

    $('.label-list').innerHTML = labelListTpl;
  }
}

export class NewLabelBtn {
  className = '';
  $labelForm = $('#new-label-form');
  constructor(className) {
    this.className = className;
    observe('isFormOpened', () => this.toggle(LabelStore.isFormOpened));
  }
  addEvent() {
    $(this.className).addEventListener('click', () => {
      LabelStore.isFormOpened = !LabelStore.isFormOpened;
    });
  }
  toggle(isOpened) {
    isOpened
      ? this.$labelForm.classList.add('hidden')
      : this.$labelForm.classList.remove('hidden');
  }
}

class ColorInput {
  $target;
  color = LabelColor[0];
  constructor(selector) {
    this.$target = $(selector);
    observe(
      'inputLabelColor',
      () => (this.$target.style.backgroundColor = LabelStore.inputLabelColor),
    );
  }
  addEvent() {
    this.$target.addEventListener('click', () => {
      LabelStore.inputLabelColor = this.getNextColor();
    });
  }
  getNextColor() {
    this.colorIdx =
      this.colorIdx === LabelColor.length - 1 ? 0 : this.colorIdx + 1;
    return LabelColor[this.colorIdx];
  }
}

class LabelPreview {
  $target;
  constructor(selector) {
    this.$target = $(selector);
    observe(['inputLabelText', 'inputLabelColor'], () => this.observeFn());
  }
  observeFn() {
    this.$target.style.backgroundColor = LabelStore.inputLabelColor;
    this.$target.innerText = LabelStore.inputLabelText;
  }
}
