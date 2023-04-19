import Observable from "../../../../application/Observable";
import LabelModel from "../../../../domain/use_cases/label/LabelModel"

export default class LabelViewModel extends Observable {
  constructor() {
    super();
    this.model = new LabelModel(this);
  }

  async getData(key, options) {
    const response = await this.model.fetchGetLabel()
    this.notify(key, response)
  }

}
