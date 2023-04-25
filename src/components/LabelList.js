import { Component } from '../lib/Component.js';
import { getLabelItemTpl } from '../tpl.js';

class LabelList extends Component {
  template() {
    const { labels } = this.props;

    return labels ? labels.map((label) => getLabelItemTpl(label)).join('') : '';
  }
}

export default LabelList;
