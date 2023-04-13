import { Component } from '../lib/Component.js';
import { getLabelForm } from '../tpl.js';
import { getRandomColor } from '../utils/randomColor.js';
import { $ } from '../utils/dom.js';

class LabelForm extends Component {
  initState() {
    return {
      name: '',
      description: '',
      color: getRandomColor(),
    };
  }

  template() {
    const { name, description } = this.state;
    return getLabelForm({ name, description });
  }

  setDOMs() {
    this.$form = $('#new-label-form');
    this.$nameInput = $('#label-name-input');
    this.$labelPreview = $('#label-preview');
    this.$desciptionInput = $('#label-description-input');
    this.$colorButton = $('#new-label-color');
    this.$colorInput = $('#label-color-value');
    this.$labelCreateButton = $('#label-create-button');

    const { name, description, color } = this.state;
    const colorString = '#' + color;
    this.$nameInput.value = name;
    this.$desciptionInput.value = description;
    this.$labelPreview.style.backgroundColor = colorString;
    this.$colorButton.style.backgroundColor = colorString;
    this.$colorInput.value = colorString;
  }

  setEvent() {
    this.$form.addEventListener(
      'submit',
      ((event) => {
        event.preventDefault();
        const { name, description, color } = this.state;
        this.props.onCreateLabel({
          name,
          description,
          color,
        });
      }).bind(this)
    );

    this.$colorButton.addEventListener('click', () => {
      this.state.color = getRandomColor();
    });

    this.$nameInput.addEventListener('change', (event) => {
      this.state.name = event.target.value;
    });

    this.$desciptionInput.addEventListener('change', (event) => {
      this.state.description = event.target.value;
    });
  }
}

export default LabelForm;
