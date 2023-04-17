import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelProperty from './LabelProperty';
import { $ } from '../../../utils';
import Store from '../../store';

class LabelCreator {
  constructor() {
    this.#init();
  }

  #init() {
    $('#new-label-form').classList.remove('hidden');
    this.render();
  }

  render() {
    [LabelProperty('name'), LabelProperty('description'), LabelColor].forEach((Component) => {
      Component();
    });

    new CreateButton();
  }
}
export default LabelCreator;
