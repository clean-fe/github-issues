import {getLabel} from "../../../data/network/APIEndpoints";

/*
* ViewModel 이 Model 의 함수를 호출 후 pending 에 대한 비동기 처리를 직접 함. ViewModel 이 Model 을 직접 컨트롤.
* */
export default class LabelModel {
  constructor() {
  }

  fetchGetLabel() {
    return getLabel()
  }

}
