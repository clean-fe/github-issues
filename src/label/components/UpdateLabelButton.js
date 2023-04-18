import { $, request } from '../../utils/index.js';

class UpdateLabelButton {
  $target;

  constructor({ selector = '.refresh-labels', setList }) {
    this.$target = $(selector);
    this.addEvent();
    this.setList = setList;
  }
  addEvent() {
    let controllers = [];
    this.$target.addEventListener('click', async () => {
      const controller = new AbortController();
      controllers = controllers.concat(controller);
      setTimeout(() => {
        controllers.forEach((controller, idx) => {
          if (idx) controller.abort();
        });
        controllers = [];
      }, 1_000);

      const res = await this.getUpdatedLabelsWithSignal(controller.signal);
      this.setList(res);
    });
  }
  async getUpdatedLabelsWithSignal(signal) {
    const labels = await request({
      url: '/labels-delay',
      signal,
    });
    return labels;
  }
}

export default UpdateLabelButton;
