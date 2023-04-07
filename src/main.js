import router, {app} from "./util/Router";
import attachNavigationEvent from "./util/Navigator"
import {mutationObserver} from "./util/UI/Observer";

// MARK: init
(() => {
  router('/')
  attachNavigationEvent()
})()

// 마땅한 활용 방법을 못 찾겠다... 단지 View 만 바뀌는 게 아니라 데이터 fetch 후 렌더할 때도 반응함.
// options 를 'childList' 대신 'attributes' 로 주는 방법을 생각해 보았으나 그럴 바엔 그냥 로컬스토리지 이용이 낫지 않을까 생각됨...
mutationObserver.observe(app, {
  childList: true,
})
