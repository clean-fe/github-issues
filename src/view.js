import { getLabelItemTpl } from "./tpl";

export class View {
  constructor(data) {
    this.data = data;
  }

  async getLabelData() {
    const response = await fetch("../data-sources/labels.json");
    const result = await response.json();
    this.data = result;
  }

  render() {
    return this.data.map((item) =>
      getLabelItemTpl({ name: item.name, color: item.color, description: item.description })
    );
  }
}
