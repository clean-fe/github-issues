import { Component } from '../lib/Component.js';
import { getLabelForm } from '../tpl.js';

class LabelForm extends Component {
  template() {
    return getLabelForm();
  }
}

export default LabelForm;
