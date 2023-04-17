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
    // TODO: 이미 가지고 있는 파일이면 불러오지 않게
    Promise.all(
      [
        './components/LabelForm.js',
        './components/LabelList.js',
        './components/NewLabelButton.js',
        './components/UpdateLabelButton.js',
      ].map((file) => import(file)),
    ).then(
      ([
        { default: LabelForm },
        { default: LabelList },
        { default: NewLabelBtn },
        { default: UpdateLabelButton },
      ]) => {
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
        new UpdateLabelButton({ setList: labelListStore.setLabelList });
      },
    );
  }
}
