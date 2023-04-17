import { $, request } from '../../utils/index.js';

class UpdateLabelButton {
  $target;
  controllers = [];
  constructor({ selector = '.refresh-labels', setList }) {
    this.$target = $(selector);
    this.addEvent();
    this.setList = setList;
  }
  addEvent() {
    this.$target.addEventListener('click', async () => {
      const controller = new AbortController();
      this.controllers = this.controllers.concat(controller);
      setTimeout(() => {
        this.controllers.forEach((controller, idx) => {
          if (idx) controller.abort();
        });
        this.controllers = [];
      }, 1_000);

      const res = await request({
        url: '/labels-delay',
        signal: controller.signal,
      });
      this.setList(res);
    });
  }
}

export default UpdateLabelButton;
