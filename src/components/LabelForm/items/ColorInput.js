import { Component } from '../../lib/Component.js';
import { $ } from '../../utils/dom.js';

class ColorInput extends Component {
  setDOMs() {
    this.$colorInput = $('#label-color-value');
    this.$colorButton = $('#new-label-color');

    const colorString = '#' + this.props.color;
    this.$colorInput.value = colorString;
    this.$colorButton.style.backgroundColor = colorString;
  }

  setEvent() {
    const { handleChangeColor } = this.props;
    this.$colorButton.addEventListener('click', handleChangeColor);
  }
}

export default ColorInput;
