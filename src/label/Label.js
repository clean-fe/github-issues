import { $ } from '../utils/index.js';
import { getLabelTpl } from '../tpl.js';
import { labelFormStore, labelListStore } from '../store/labelStore.js';

export class LabelButton {
  addEvent() {
    const labelBtn = $('#label-btn');
    labelBtn.addEventListener('click', () => {
      $('#app').innerHTML = getLabelTpl();
      this.initLabelPage();
    });
  }
  async initLabelPage() {
    const { LabelList, NewLabelBtn, LabelForm } = await import(
      './components.js'
    );
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
