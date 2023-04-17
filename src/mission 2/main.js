import { model } from "./Model.js";
import { ViewModel } from "./ViewModel.js";
import { getLabelTpl } from "./tpl.js";

export function main() {
  new ViewModel({
    element: "#app",
    view: getLabelTpl,
    model: model,
    isRoot: true,
    mounted() {
      model.fetchLabelList().then((labelList) => {
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
          this.model.data.color = this.model.getRandomColor();
        },
      },
      {
        target: "#label-create-button",
        eventName: "click",
        handler(e) {
          e.preventDefault();
          this.model.addLabelList([
            {
              name: this.model.data.labelName,
              color: this.model.data.color,
              description: this.model.data.labelDescription,
            },
          ]);
        },
      },
    ],
  });
}
