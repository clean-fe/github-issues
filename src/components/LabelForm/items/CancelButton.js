import { $ } from '../../../utils/dom.js';
import { Component } from '../../../lib/Component.js';

class CancelButton extends Component {
  setDOMs() {
    this.$cancelButton = $('#cancel-button');
  }

  setEvent() {
    this.$cancelButton.addEventListener('click', this.props.onCancelCreateLabel);
  }
}

export default CancelButton;
