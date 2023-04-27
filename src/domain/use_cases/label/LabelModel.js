import {getLabel, postLabel} from "../../../data/network/APIEndpoints";

/*
* ViewModel 이 Model 의 함수를 호출 후 pending 에 대한 비동기 처리를 직접 함. ViewModel 이 Model 을 직접 컨트롤.
* */
export default class LabelModel {
  constructor() {
  }

  fetchGetLabel() {
    // TODO: 이 부분에서 async await 를 사용해 캐시와 비교하는 것을 추가할 수 있지 않을까?
    return getLabel
  }

  fetchPostLabel(body) {
    return postLabel(body)
  }

}
