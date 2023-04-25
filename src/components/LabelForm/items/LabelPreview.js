import { Component } from '../../lib/Component.js';
import { $ } from '../../utils/dom.js';

class LabelPreview extends Component {
  setDOMs() {
    this.$labelPreview = $('#label-preview');
    this.$labelPreview.style.backgroundColor = '#' + this.props.color;
  }
}

export default LabelPreview;
