import { getLabelItemTpl } from '../../../tpl';

class LabelItem {
  static render(labelItem) {
    return getLabelItemTpl(labelItem);
  }
}

export default LabelItem;
