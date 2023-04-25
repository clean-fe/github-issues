import { Component } from '../../lib/Component.js';
import { $ } from '../../utils/dom.js';

class NameInput extends Component {
  setDOMs() {
    this.$nameInput = $('#label-name-input');
    this.$nameInput.value = this.props.name;
  }

  setEvent() {
    const { handleChangeName } = this.props;

    this.$nameInput.addEventListener('change', handleChangeName);
  }
}

export default NameInput;
