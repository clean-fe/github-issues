import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelProperty from './LabelProperty';
import { $ } from '../../../utils';
import Store from '../../store';

class LabelCreator {
  #store;

  constructor() {
    this.#store = Store('isNewLabelClicked');
    this.#init();
  }

  #init() {
    this.#store.subscribe(this.#show.bind(this));
    this.#show();
    this.#render();
  }

  #show() {
    const isNewLabelClicked = Store('isNewLabelClicked').getState();
    isNewLabelClicked
      ? $('#new-label-form').classList.remove('hidden')
      : $('#new-label-form').classList.add('hidden');
  }

  #render() {
    [CreateButton, LabelProperty('name'), LabelProperty('description'), LabelColor].forEach(
      (Component) => {
        Component();
      },
    );
  }
}
export default LabelCreator;
