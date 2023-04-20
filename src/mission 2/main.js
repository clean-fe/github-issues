import { labelModel } from "./Model.js";
import { ViewModel } from "./ViewModel.js";
import { getLabelTpl } from "./tpl.js";
import { getRandomColor } from "../utils/getRandomColor.js";

export function main() {
  new ViewModel({
    element: "#app",
    view: getLabelTpl,
    model: labelModel,
    isRoot: true,
    mounted() {
      labelModel.fetchLabelList().then((labelList) => {
        this.model.addLabelList(labelList);
      });
    },
    events: [
      {
        target: ".new-label-button",
        eventName: "click",
        handler(e) {
          e.preventDefault();
          this.model.toggleIsLabelFormHidden();
        },
      },
      {
        target: "#label-name-input",
        eventName: "input",
        handler(e) {
          this.model.data.labelName = e.target.value;
        },
      },
      {
        target: "#label-description-input",
        eventName: "input",
        handler(e) {
          this.model.data.labelDescription = e.target.value;
        },
      },
      {
        target: "#new-label-color",
        eventName: "click",
        handler() {
          this.model.data.color = getRandomColor();
        },
      },
      {
        target: "#label-create-button",
        eventName: "click",
        handler(e) {
          e.preventDefault();
          const newLabel = {
            name: this.model.data.labelName,
            color: this.model.data.color.replace(/^#/, ""),
            description: this.model.data.labelDescription,
          };

          this.model.fetchCreateLabel(newLabel);
        },
      },
      {
        target: ".refresh-labels",
        eventName: "click",
        async handler(e) {
          e.preventDefault();

          const controller = new AbortController();
          const signal = controller.signal;

          try {
            this.model.data.controllers.push(controller);
            this.model.fetchDelayLabelList(signal);
            for (let i = 0; i < this.model.data.controllers.length - 1; i++) {
              this.model.data.controllers[i].abort();
            }
          } catch (e) {
            console.error(e);
          }
        },
      },
    ],
  });
}
