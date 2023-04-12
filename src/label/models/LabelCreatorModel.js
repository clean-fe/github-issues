import Observable from '../../Observable';

class LabelCreatorModel extends Observable {
  #newLabel = {};

  constructor() {
    super();
    this.#newLabel = {
      name: '',
      description: '',
      color: '',
    };
  }

  get newLabel() {
    return this.#newLabel;
  }

  setLabelProperty(property) {
    this.#newLabel = {
      ...this.#newLabel,
      ...property,
    };
    this.isAllInputFilled && this.notify(this.#newLabel);
  }

  get isAllInputFilled() {
    const { name, description, color } = this.#newLabel;
    return name && description && color;
  }
}

export default new LabelCreatorModel();
