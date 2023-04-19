import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelProperty from './LabelProperty';
import { $ } from '../../../utils';
import { STORE_KEY } from '../../../constants';

class LabelCreator {
  #store;
  #STATE_KEY = STORE_KEY.IS_NEW_LABEL_CLICKED;

  constructor(Store) {
    this.#store = Store;
    this.#init();
  }

  #init() {
    const newLabelClickedStore = this.#store(this.#STATE_KEY);
    newLabelClickedStore.setState(false);
    newLabelClickedStore.subscribe(this.#show.bind(this));
    this.#show();
    this.render();
  }

  #show() {
    const newLabelClickedStore = this.#store(this.#STATE_KEY);
    const isNewLabelClicked = newLabelClickedStore.getState();
    isNewLabelClicked
      ? $('#new-label-form').classList.remove('hidden')
      : $('#new-label-form').classList.add('hidden');
  }

  render() {
    [LabelProperty('name'), LabelProperty('description'), LabelColor, CreateButton].forEach(
      (Component) => {
        Component(this.#store);
      },
    );
  }
}
export default LabelCreator;
