import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelDescription from './LabelDescription';
import LabelName from './LabelName';
import { $ } from '../../../utils';
import Store from '../../store';

class LabelCreator {
  constructor() {
    this.#init();
  }

  #init() {
    $('#new-label-form').classList.remove('hidden');
    Store.subscribe('isAllInputFilled', this.render.bind(this));
    this.render();
  }

  render() {
    [LabelName, LabelDescription, LabelColor].forEach((Component) => {
      Component();
    });

    new CreateButton();
  }
}
export default LabelCreator;
