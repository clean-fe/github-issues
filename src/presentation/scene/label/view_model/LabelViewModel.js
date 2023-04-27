import Observable from "../../../../application/Observable";
import LabelModel from "../../../../domain/use_cases/label/LabelModel"

export default class LabelViewModel extends Observable {
  constructor() {
    super();
    this.model = new LabelModel();
  }

  // COMMENT: 만약 fetchGetLabel 함수가
  //          async fetchGetLabel() {
  //            return await getLabel
  //          }
  //          로 작성되었다 하더라도 getData 역시 async/await 가 필요하다.
  //          자바스크립트가 싱글 스레드여서 하위 함수가 비동기 결과를 기다리도록 동기적으로 동작 시키기 위해
  //          메인 스레드를 비워준다고 이 부분 역시 동기 코드로 동작하지 않기 때문으로 보인다.
  //          따라서 Promise 객체의 return 에 연결된 모든 Promise chaining 은 pending 이 아닌 resolve/reject 가 필요할 경우
  //          상위 호출 함수의 context 역시 async/await 를 이용해야한다.
  async getData(options) {
    const response = await this.model.fetchGetLabel()
    this.notifyAll(response)
  }

  async postData(body, options) {
    const response = await this.model.fetchPostLabel(body)
  }

}
