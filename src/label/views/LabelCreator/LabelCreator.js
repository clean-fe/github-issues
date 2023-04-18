import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelProperty from './LabelProperty';
import { $ } from '../../../utils';
import Store from '../../store';
import { STORE_KEY } from '../../../constants';

class LabelCreator {
  #store;
  #STATE_KEY = STORE_KEY.IS_NEW_LABEL_CLICKED;

  constructor(Store) {
    this.#store = Store;
    this.#init();
  }

  #init() {
    this.#store(this.#STATE_KEY).subscribe(this.#show.bind(this));
    this.#show();
    this.#render();
  }

  #show() {
    const isNewLabelClicked = this.#store(this.#STATE_KEY).getState();
    isNewLabelClicked
      ? $('#new-label-form').classList.remove('hidden')
      : $('#new-label-form').classList.add('hidden');
  }

  #render() {
    [CreateButton, LabelProperty('name'), LabelProperty('description'), LabelColor].forEach(
      (Component) => {
        Component(Store);
      },
    );
  }
}
export default LabelCreator;
