import { Component } from '../../../lib/Component.js';
import { $ } from '../../../utils/dom.js';

class DescriptionInput extends Component {
  setDOMs() {
    this.$descriptionInput = $('#label-description-input');
    this.$descriptionInput.value = this.props.description;
  }

  setEvent() {
    const { handleChangeDescription } = this.props;

    this.$descriptionInput.addEventListener('change', handleChangeDescription);
  }
}

export default DescriptionInput;
