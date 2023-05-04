import Observable from "../../../../application/Observable";
import IssueModel from "../../../../domain/use_cases/issue/IssueModel";

/*
* Delegate 패턴을 적용.
* - ViewModel 이 Model 의 응답 및 pending 에 대한 비동기 처리를 직접 하지 않음. Model 이 하도록 하고 View 가 등록한
* Observer 를 트리거 하는 일을 Delegate 패턴을 이용해 Model 에 위임함.
* */
export default class IssueViewModel extends Observable {
  constructor() {
    super();
    this.model = new IssueModel(this) // delegate 패턴... ViewModel 과 Model 의 결합도가 높아져서 별로이려나...?
  }

  // COMMENT: 방법 1. ViewModel 이 Model 로부터 Closure 를 호출 후 받게 됨으로 해당 함수 내에서 다음 라인으로 넘어가지 않으려면
  // (=스레드 우선권을 빼았겨 콜백 큐에 넘아기 않으려면) 비동기 처리를 이곳에서 해야한다.
  // - 예상되는 장점 : 별도의 handler 가 추가로 필요하지 않다는 점이다.
  // - 예상되는 단점 : ViewModel 이 기존의 MVC 패턴의 Controller 처럼 중간에 껴서 너무 많은 책임을 지게 되고 비대해진다는 것.
  /*async getData([...keys], options = undefined) {
    const response = await this.model.fetchGetIssue()
    keys.forEach(key => this.notify(key, response))
  }*/

  // COMMENT: 방법 2. Model 을 호출 후 종료되기 때문에 해당 함수 내에서는 다음 라인으로 넘어가지 않음. 즉, 바로 Model 로 스레드가 넘어가니까
  // 이곳에서 비동기 처리를 할 필요가 없고, 비동기 처리를 Model 이 직접 하도록 위임함.
  // - 예상되는 장점 : getData 가 단방향으로 동작하므로 Model 과 View 사이에 껴서 양쪽을 컨트롤 하지 않는다는 것이다. 즉,
  // MVC 패턴의 Controller 처럼 되지 않고 당방향으로 Flux(?) 처럼 변경...? 맞나?
  // 이제 ViewModel 은 View 의 Observer 를 관리하는 역할(=View 를 위한 Model)만 하고 이 Observer 를 트리거 하는 것은 Model 이
  // 자신의 데이터 호출 작업이 종료되면 스스로 View 에게 알리도록 함. delegate 를 사용해 위임 처리.
  // - 예상되는 단점 : ViewModel 과 Model 사이에 Strong Reference Cycle 이 생길 것 같다. 이 패턴을 사용하려면 Weak Reference
  // 처리를 함께 해줘야 할텐데... 근데 딱히 메모리 탭에 증가되는 것으로 보이진 않는다?????
  getData([...keys], options = undefined) {
    const _ = this.model.fetchGetIssue(keys)
  }

  modelCallbackHandler([...keys], response) {
    keys.forEach(key => this.notify(key, response))
  }

}
