class LabelName {
  constructor({ creatorModel }) {
    this.init({ creatorModel });
  }

  init({ creatorModel }) {
    $('#label-name-input').addEventListener('input', ({ target }) => {
      creatorModel.setLabelProperty({ name: target.value });
    });
  }
}

export default LabelName;
