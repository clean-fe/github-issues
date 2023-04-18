import {getLabel} from "../../../data/network/APIEndpoints";

export default class LabelModel {
  constructor(delegate) {
    this.delegate = delegate
  }

  fetchGetLabel() {
    return getLabel()
  }

}
