import { getLabelItemTpl } from "./tpl";

export class Model {
  constructor(data) {
    this.data = data;
  }

  createLabelItem() {
    const label = {
      name: "example",
      color: "fff",
      description: "no description",
    };
    const labelItemTpl = getLabelItemTpl(label);

    return labelItemTpl;
  }
}
