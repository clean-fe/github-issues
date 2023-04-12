import CreateButton from './CreateButton';
import LabelColor from './LabelColor';
import LabelDescription from './LabelDescription';
import LabelName from './LabelName';
import { $ } from '../../../utils';

class LabelCreator {
  constructor({ creatorModel, listModel }) {
    creatorModel.subscribe(this.render.bind(this, { creatorModel, listModel }));
    $('#new-label-form').classList.remove('hidden');
    this.render({ creatorModel, listModel });
  }

  render({ creatorModel, listModel }) {
    [LabelName, LabelDescription, LabelColor].forEach((Component) => {
      new Component({ creatorModel, listModel });
    });

    if (creatorModel.isAllInputFilled) {
      new CreateButton({ creatorModel, listModel });
    }
  }
}
export default LabelCreator;
