import router, {app} from "./util/Router";
import attachNavigationEvent from "./util/Navigator"

// MARK: init
(() => {
  router('/')
  attachNavigationEvent()
})()

