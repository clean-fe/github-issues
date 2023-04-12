import { getLabelTpl } from '../tpl';
import { $ } from '../utils/dom';
import LabelList from './views/LabelList';
import LabelCreator from './views/LabelCreator';
import LabelListModel from './models/LabelListModel';
import LabelCreatorModel from './models/LabelCreatorModel';

class Label {
  #model = null;
  constructor({ model }) {
    // TODO: 전역 상태
    this.#model = model;
    this.#model.subscribe(this.render.bind(this));
    this.render();
    this.#addEventOfCreator();
  }

  #addEventOfCreator() {
    $('.new-label-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.#model.isNewLabelClicked = true;
    });
  }

  render() {
    $('#app').innerHTML = getLabelTpl();

    new LabelList({ model: LabelListModel });
    this.#model.isNewLabelClicked &&
      new LabelCreator({ creatorModel: LabelCreatorModel, listModel: LabelListModel });
  }
}

export default Label;
