import { Component } from '../../lib/Component.js';
import { getLabelForm } from '../../tpl.js';
import { getRandomColor } from '../../utils/randomColor.js';
import { $ } from '../../utils/dom.js';
import { postLabel } from '../../api/services/labels.js';
import { NameInput, DescriptionInput, ColorInput, LabelPreview, CancelButton } from '../index.js';

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
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, description, color } = this.state;

    const labels = await postLabel({ name, description, color });

    this.props.onCreateLabel(labels);
  }

  setEvent() {
    this.$form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleChangeName(event) {
    this.state.name = event.target.value;
  }

  handleChangeDescription(event) {
    this.state.description = event.target.value;
  }

  handleChangeColor() {
    this.state.color = getRandomColor();
  }

  mounted() {
    new NameInput(null, {
      name: this.state.name,
      handleChangeName: this.handleChangeName.bind(this),
    });

    new DescriptionInput(null, {
      description: this.state.description,
      handleChangeDescription: this.handleChangeDescription.bind(this),
    });

    new ColorInput(null, {
      color: this.state.color,
      handleChangeColor: this.handleChangeColor.bind(this),
    });

    new LabelPreview(null, {
      color: this.state.color,
    });

    new CancelButton(null, {
      onCancelCreateLabel: this.props.onCancelCreateLabel,
    });
  }
}

export default LabelForm;
