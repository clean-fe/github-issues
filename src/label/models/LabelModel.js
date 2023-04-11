import Observable from '../../Observable';

class LabelModel extends Observable {
  #isNewLabelClicked = false;
  constructor() {
    super();
    this.#isNewLabelClicked = false;
  }

  get isNewLabelClicked() {
    return this.#isNewLabelClicked;
  }

  set isNewLabelClicked(isNewLabelClicked) {
    this.#isNewLabelClicked = isNewLabelClicked;
    this.notify(this.#isNewLabelClicked);
  }
}

export default LabelModel;
