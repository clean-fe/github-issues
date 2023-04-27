import { $ } from '../utils/dom.js';
import { Component } from '../lib/Component.js';
import { updateLabels } from '../api/services/labels.js';

class UpdateLabelsButton extends Component {
  setDOMs() {
    this.$updateButton = $('.refresh-labels');
  }

  async handleClickUpdateButton() {
    this.props.onUpdateLabels(await updateLabels());
  }

  setEvent() {
    this.$updateButton.addEventListener('click', this.handleClickUpdateButton.bind(this));
  }
}

export default UpdateLabelsButton;
